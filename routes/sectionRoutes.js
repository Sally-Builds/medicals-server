const express = require('express');
const sectionController = require('../controller/sectionController');
// const authController = require('../controller/authController');

const router = express.Router({ mergeParams: true });

// router.use(authController.protect)
// router.use(authController.restrictTo('admin'))

router
  .route('/')
  .post(sectionController.createSection)
  .get(sectionController.getAllSections);

router
  .route('/:id')
  .get(sectionController.getSection)
  .patch(sectionController.updateSection);

module.exports = router;
