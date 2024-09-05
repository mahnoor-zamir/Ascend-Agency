const express = require('express');
const router = express.Router();
const socialpostController = require('../Controllers/socialpostController');

router.get('/', socialpostController.getSocialposts);

module.exports = router;
