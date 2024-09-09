const userSchema = require('../../models/users_schemas/user_schema');
const userController = {}

userController.getAllUsers = async (req, res, next) => { // GET /users, schema = findAllUsers()
    try {
        const users = await userSchema.findAllUsers();
        return res.status(200).json({
            status: true, 
            data: users,
            message: 'All users found.'
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        });
    }
};

userController.getUser = async (req, res, next) => { // GET users/:userId, schema = findUser
    const { userId } = req.params;
    try {
        if (!userId) return res.status(404).json({
            status: false,
            message: 'User not found.'
        })

        const user = await userSchema.findUser(userId);
        return res.status(200).json({
            status: true,
            data: user,
            message: 'User found'
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        });
    }
}

module.exports = userController;


/*
SEQUELIZE Users Model Queries
createUser(user)
findAllUsers()
findUser(query)
updateUser(query, updatedValue)
deleteUser(query)
*/