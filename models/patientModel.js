const mongoose = require('mongoose');

const blood = ['A+', 'A-', 'B+', 'O+', 'O-', 'AB+', 'AB-'];
const genotype = ['AA', 'AS', 'SS'];

const financeSchema = new mongoose.Schema({
  totalCharge: {
    type: Number,
    default: 0,
  },
  amountCleared: {
    type: Number,
    default: 0,
  },
  amountUncleared: {
    type: Number,
    default: 0,
  },
});

const patientSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Patient must provide first namet'],
    },
    middleName: {
      type: String,
      required: [true, 'Patient must provide middle name'],
    },
    lastName: {
      type: String,
      required: [true, 'Patient must provide last name'],
    },
    email: {
      type: String,
      required: [true, 'Patient Email needed'],
    },
    address: {
      type: String,
      required: [true, 'patient Address is needed'],
    },
    mobile: {
      type: String,
      required: [true, 'patient mobile number is required'],
    },
    bloodGroup: {
      type: String,
      enum: blood,
      required: [true, 'patient Blood group must be listed'],
    },
    genotype: {
      type: String,
      enum: genotype,
      required: [true, 'patient genotype must be listed'],
    },
    dateOfBirth: {
      type: String,
      required: [true, 'Date of Birth not correct'],
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: [true, 'patient must have a sex'],
    },
    hivStatus: {
      type: String,
      required: [true, 'Hiv status required'],
      enum: ['positive', 'negative'],
    },
    eyeColor: {
      type: String,
    },
    photo: {
      type: String,
      default: 'default.jpg',
    },
    patientNo: {
      type: String,
    },
    emergencyContactFirstName: {
      type: String,
      // required: [true, 'Patient must provide first name of emergency contact'],
    },
    emergencyContactMiddleName: {
      type: String,
      // required: [true, 'Patient must provide middle name of emergency contact'],
    },
    emergencyContactLastName: {
      type: String,
      // required: [true, 'Patient must provide last name of emergency contact'],
    },
    emergencyContactAddress: {
      type: String,
      // required: [true, 'Emergency contact address needed'],
    },
    emergencyContactMobile: {
      type: String,
      // required: [true, 'Emergency contact mobile number needed'],
    },
    emergencyContactEmail: {
      type: String,
      // required: [true, 'Emergency contact email needed'],
    },
    finances: financeSchema,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

patientSchema.virtual('sections', {
  ref: 'Section',
  foreignField: 'patient',
  localField: '_id',
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
