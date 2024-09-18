const express = require('express');
const router = express.Router();
const prbundlesController = require('../Controllers/prbundlesController');

router.get('/', prbundlesController.getPrbundles);

module.exports = router;
