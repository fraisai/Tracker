const router = require('express').Router();
const userController = require('./users_controller');

router.get('users', userController.getAllUsers);
router.get('users/:user_id', userController.getUser);
router.post('users/:user_id');
router.put('users/:user_id');
router.delete('users/:user_id');

module.exports = router; 


/*
SEQUELIZE Users Model Queries
createUser(user)
findAllUsers()
findUser(query)
updateUser(query, updatedValue)
deleteUser(query)
*/