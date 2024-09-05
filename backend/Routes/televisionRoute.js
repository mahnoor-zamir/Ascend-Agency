const express = require('express');
const router = express.Router();
const televisionController = require('../Controllers/televisionController');

router.get('/', televisionController.getTelevision);

module.exports = router;
