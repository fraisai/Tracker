const router = require('express').Router();
const userController = require('./users_controller');

router.get('users');
router.get('users/:user_id');
router.post('users/:user_id');
router.put('users/:user_id');
router.delete('users/:user_id');

module.exports = router; 