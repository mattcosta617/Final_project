const router = require('express').Router();
const ctrl = require('../controllers/user')

router.post('/register', ctrl.register);
router.post('/login', ctrl.login);
router.get('/verify', ctrl.verify);

module.exports = router;
