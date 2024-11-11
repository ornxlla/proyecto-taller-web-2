const express = require('express');
const { login, sessionStatus } = require('../controllers/auth-controller');

const router = express.Router();

router.post('/login', login);
router.get('/session-status', sessionStatus);

module.exports = router;
