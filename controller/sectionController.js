const Section = require('../models/sectionModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createSection = catchAsync(async (req, res, next) => {
  if (!req.body.patient) req.body.patient = req.params.patientId;
  const {
    name,
    consultancyForm,
    medTariff,
    timeSpent,
    labTariff,
    noOfTests,
    drugs,
    patient,
    date,
  } = req.body;
  const section = new Section({
    name,
    consultancyForm,
    patient,
    date,
    medTime: {},
    labTest: {},
  });

  section.drugs.push(...drugs);

  section.medTime.set('medTariff', medTariff);
  section.medTime.set('timeSpent', timeSpent);

  section.labTest.set('labTariff', labTariff);
  section.labTest.set('noOfTests', noOfTests);

  //calculaete the total charge
  const totalCharge =
    consultancyForm * 1 +
    medTariff * 1 * (timeSpent * 60) +
    labTariff * 1 * (noOfTests * 1);
  section.totalCharge = totalCharge;
  section.amountUncleared = totalCharge;

  await section.save();
  res.status(201).json({
    status: 'success',
    data: section,
  });
});

exports.getAllSections = catchAsync(async (req, res, next) => {
  let body = {};
  if (req.params.patientId) {
    body = { patient: req.params.patientId };
  }
  const sections = await Section.find(body);

  res.status(200).json({
    status: 'success',
    results: sections.length,
    data: sections,
  });
});

exports.getSection = catchAsync(async (req, res, next) => {
  const section = await Section.findById(req.params.id);

  if (!section) {
    next(new AppError('No section found', 404));
  }
  res.status(200).json({
    status: 'success',
    data: section,
  });
});

exports.updateSection = catchAsync(async (req, res, next) => {
  const section = await Section.findById(req.params.id);
  if (!section) {
    return next(new AppError('No doc found', 404));
  }
  const entries = Object.entries(req.body);
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of entries) {
    // eslint-disable-next-line eqeqeq
    if (key != 'medTime' || key !== 'labTest' || key !== 'drugs') {
      section[key] = value;
    }
  }
  section.amountUncleared = section.totalCharge - section.amountCleared;
  await section.save();

  res.status(200).json({
    status: 'success',
    data: {
      section,
    },
  });
});

exports.deleteSection = catchAsync(async (req, res, next) => {
  const section = await Section.findByIdAndDelete(req.params.id);
  if (!section) {
    return next(new AppError('No document found', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
