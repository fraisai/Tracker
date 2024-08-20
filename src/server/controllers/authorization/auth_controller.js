const bcrypt = require('bcrypt');

const authController = {};


authController.register = async (req, res, next) => {
    try {
        const { password, email,  } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        // const newUser = new 
    } catch (error) {
        console.log('error in authController.register'. error);
        return;
    }
}