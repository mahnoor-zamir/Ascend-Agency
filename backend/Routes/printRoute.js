const express = require('express');
const router = express.Router();
const printController = require('../Controllers/printController');

router.get('/', printController.getPrint);

module.exports = router;
