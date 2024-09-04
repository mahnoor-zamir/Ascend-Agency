const express = require('express');
const router = express.Router();
const listicleController = require('../Controllers/listicleController');

router.get('/', listicleController.getListicles);

module.exports = router;
