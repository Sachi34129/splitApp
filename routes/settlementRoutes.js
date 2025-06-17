const express = require('express');
const router = express.Router();
const { getSettlement } = require('../controllers/settlementController');

router.get('/settlements', getSettlement);

module.exports = router;