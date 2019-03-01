const express = require('express');
const router = express.Router();
const checkRequest = require('../../../middlewares/CheckRequest')
const { formationValidator } = require('../../../validations/privateRoutes');

router.get('/', formationValidator.getFormations, checkRequest, require('./getFormations'))

module.exports = router;
