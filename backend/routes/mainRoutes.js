const express = require('express');
const { getMain } = require('../controllers/mainRoutesController');
const router = express.Router();

router.get('/api/books', getMain);

module.exports = router;
