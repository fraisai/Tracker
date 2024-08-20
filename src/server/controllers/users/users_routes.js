const router = require('express').Router();

router.get('users');
router.get('users/:user_id');
router.post('users/:user_id');
router.put('users/:user_id');
router.delete('users/:user_id');

module.exports = router; 