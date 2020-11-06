const express = require('express');
const patientController = require('../controller/patientController');
const sectionRouter = require('./sectionRoutes');
// const authController = require('../controller/authController');

const router = express.Router();

router.use('/:patientId/sections', sectionRouter);
// router.use(authController.protect)
// router.use(authController.restrictTo('admin'))

// router.patch(
//   '/updatePatient',
//   patientController.uploadUserPhoto,
//   patientController.resizeUserPhoto,
//   patientController.updateMe
// );
router.get('/summary', patientController.activitySummary);

router
  .route('/')
  .post(
    patientController.uploadUserPhoto,
    patientController.resizeUserPhoto,
    patientController.createPatient
  )
  .get(patientController.getAllPatients);

router
  .route('/:id')
  .get(patientController.getPatient)
  .patch(
    patientController.uploadUserPhoto,
    patientController.resizeUserPhoto,
    patientController.updatePatient
  );

module.exports = router;
