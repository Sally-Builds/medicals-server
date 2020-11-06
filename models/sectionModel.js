const mongoose = require('mongoose');
const Patient = require('./patientModel');

const drugSchema = new mongoose.Schema({
  name: String,
  price: Number,
  qty: Number,
});

const sectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ['Gynecology', 'Orthopaedic', 'Pediatrics'],
      required: [true, 'You must provide a section'],
    },
    consultancyForm: {
      type: String,
      required: [true, 'consultancy form must be provided'],
    },
    medTime: {
      type: Map,
      of: Number,
      required: [true, 'Med_time tariffs must be provided'],
    },
    labTest: {
      type: Map,
      of: Number,
      required: [true, 'lab_test tariffs must be provided'],
    },
    drugs: [drugSchema],
    patient: {
      type: mongoose.Schema.ObjectId,
      ref: 'Patient',
      required: [true, 'Bill must belong to a patient'],
    },
    date: {
      type: String,
      required: [true, 'please enter date'],
    },
    totalCharge: Number,
    amountCleared: {
      type: Number,
      default: 0,
    },
    amountUncleared: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

sectionSchema.statics.calculations = async function (patientId) {
  const stats = await this.aggregate([
    {
      $match: { patient: patientId },
    },
    {
      $group: {
        _id: '$patient',
        totalCharge: { $sum: '$totalCharge' },
        amountCleared: { $sum: '$amountCleared' },
        amountUncleared: { $sum: '$amountUncleared' },
      },
    },
  ]);
  const patient = await Patient.findById(patientId);
  patient.finances.totalCharge = stats[0].totalCharge;
  patient.finances.amountCleared = stats[0].amountCleared;
  patient.finances.amountUncleared = stats[0].amountUncleared;
  await patient.save();
};

sectionSchema.post('save', function (next) {
  this.constructor.calculations(this.patient);
});
sectionSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.findOne();
  next();
});
sectionSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calculations(this.r.patient);
});

const Section = mongoose.model('Section', sectionSchema);
module.exports = Section;
