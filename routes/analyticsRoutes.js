// routes/analyticsRoutes.js
const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/monthly-summary', analyticsController.getMonthlySummary);
router.get('/individual-summary', analyticsController.getIndividualSummary);
router.get('/top-categories', analyticsController.getTopCategories);

module.exports = router;