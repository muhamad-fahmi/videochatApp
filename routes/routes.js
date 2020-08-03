const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers')
router.get('/', controllers.index)
router.get('/:room', controllers.room)
module.exports = router