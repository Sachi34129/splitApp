const express = require('express');
const router = express.Router();
const { getAllPeople } = require('../controllers/peopleController');

router.get('/people', getAllPeople);

module.exports = router;