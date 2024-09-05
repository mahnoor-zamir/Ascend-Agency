const express = require('express');
const router = express.Router();
const bestsellerController = require('../Controllers/bestsellerController');

router.get('/', bestsellerController.getBestseller);

module.exports = router;
