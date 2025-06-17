const express = require('express');
const router = express.Router();
const { getAllPeople } = require('../controllers/peopleController');

router.get('/', getAllPeople);

module.exports = router;