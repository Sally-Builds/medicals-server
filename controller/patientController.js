/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const multer = require('multer');
const sharp = require('sharp');
const Patient = require('../models/patientModel');
const Section = require('../models/sectionModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createPatient = catchAsync(async (req, res, next) => {
  const count = `${(await Patient.find({}).countDocuments()) + 1}`;
  const pad = '0000';
  req.body.patientNo = pad.substring(0, pad.length - count.length) + count;
  if (req.file) req.body.photo = req.file.filename;
  req.body.finances = {};
  const patient = await Patient.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      patient,
    },
  });
});

exports.getPatient = catchAsync(async (req, res, next) => {
  const patient = await Patient.findById(req.params.id).populate('sections');

  if (!patient) {
    return next(new AppError('No doc found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      patient,
    },
  });
});

exports.getAllPatients = catchAsync(async (req, res, next) => {
  const patients = await Patient.find({}).populate('sections');

  res.status(200).json({
    status: 'success',
    results: patients.length,
    data: {
      patients,
    },
  });
});

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${
    Math.floor(Math.random() * 10000) + 1
  }-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

exports.updatePatient = catchAsync(async (req, res, next) => {
  if (req.file) req.body.photo = req.file.filename;
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!patient) {
    return next(new AppError('No doc found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      patient,
    },
  });
});

exports.activitySummary = catchAsync(async (req, res, next) => {
  const stats = await Patient.aggregate([
    {
      $match: {},
    },
    {
      $group: {
        _id: '$finances',
      },
    },
  ]);
  let totalCharge = [];
  let amountCleared = [];
  let amountUncleared = [];
  stats.forEach((e) => {
    totalCharge.push(e._id.totalCharge);
    amountCleared.push(e._id.amountCleared);
    amountUncleared.push(e._id.amountUncleared);
  });
  if (totalCharge.length > 0) {
    totalCharge = totalCharge.reduce((a, b) => a + b);
  }
  if (amountCleared.length > 0) {
    amountCleared = amountCleared.reduce((a, b) => a + b);
  }
  if (amountUncleared.length > 0) {
    amountUncleared = amountUncleared.reduce((a, b) => a + b);
  }

  const sections = ['Gynecology', 'Orthopaedic', 'Pediatrics'];
  const sectors = [];

  for (const section of sections) {
    const sect = await Section.aggregate([
      {
        $match: { name: section },
      },
      {
        $project: { totalCharge: 1, amountCleared: 1, amountUncleared: 1 },
      },
    ]);
    sectors.push(sect);
  }
  const Gynecology = sectors[0];
  const Orthopaedic = sectors[1];
  const Pediatric = sectors[2];
  const data = [];
  const gy = {
    name: 'Gynecology',
    totalCharge: 0,
    amountCleared: 0,
    amountUncleared: 0,
  };
  const orth = {
    name: 'Orthopaedic',
    totalCharge: 0,
    amountCleared: 0,
    amountUncleared: 0,
  };
  const ped = {
    name: 'Pediatrics',
    totalCharge: 0,
    amountCleared: 0,
    amountUncleared: 0,
  };
  if (Gynecology.length > 0) {
    Gynecology.forEach((e) => {
      gy.totalCharge += e.totalCharge;
      gy.amountCleared += e.amountCleared;
      gy.amountUncleared += e.amountUncleared;
    });
  }
  if (Orthopaedic.length > 0) {
    Orthopaedic.forEach((e) => {
      orth.totalCharge += e.totalCharge;
      orth.amountCleared += e.amountCleared;
      orth.amountUncleared += e.amountUncleared;
    });
  }
  if (Pediatric.length > 0) {
    Pediatric.forEach((e) => {
      ped.totalCharge += e.totalCharge;
      ped.amountCleared += e.amountCleared;
      ped.amountUncleared += e.amountUncleared;
    });
  }
  data.push(orth);
  data.push(ped);
  data.push(gy);

  //count patients
  const count = await Patient.find({}).countDocuments();

  res.status(200).json({
    status: 'success',
    data: {
      noOfPatients: count,
      totalCharge,
      amountCleared,
      amountUncleared,
      data,
    },
  });
});
