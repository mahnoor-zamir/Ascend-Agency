const express = require('express');
const router = express.Router();
const publicationController = require('../Controllers/publicationController');

router.get('/', publicationController.getPublications);

module.exports = router;
