const { DataTypes } = require('sequelize');

const { roles } = require('../config');

const UserModel = {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: roles.USER
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

module.exports = {
    // initialize method to register our schema with the Sequelize library and return a model. The returned model can then be used to manipulate (i.e., create, read, update, and delete) the data stored in the database
    initialize: (sequelize) => {
        this.model = sequelize.define('user', UserModel);
    },

    createUser: (user) => {
        return this.model.create(user)
    },

    // findAllUsers: (query) => {
    //     return this.model.findAll({
    //         where: query
    //     })
    // },

    findAllUsers: () => {
        return this.model.findAll()
    },

    findUser: (query) => {
        return this.model.findOne({
            where: query
        })
    },

    updateUser: (query, updatedValue) => {
        return this.model.update(updatedValue, {
            where: query
        })
    },

    deleteUser: (query) => {
        return this.model.destroy({
            where: query
        })
    }
}


/*
SEQUELIZE Model Queries
createUser(user)
findAllUsers()
findUser(query)
updateUser(query, updatedValue)
deleteUser(query)
*/