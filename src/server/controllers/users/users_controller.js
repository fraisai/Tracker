const userController = {}

userController.getAllUsers = (req, res, next) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })
    }
}