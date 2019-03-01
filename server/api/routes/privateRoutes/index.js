const express = require('express');
const router = express.Router();


router.use('/Formations', require('./formation'));

module.exports = router;
