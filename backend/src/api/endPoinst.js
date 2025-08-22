const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingControllers');
const { login } = require('../controllers/loginController');

router.get('/ping',ping);
router.post('/login',login) 

module.exports = router;