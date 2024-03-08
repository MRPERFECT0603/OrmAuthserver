const { Sequelize, DataTypes } = require("sequelize");

const userModel = (Sequelize, DataTypes) => {
    const User = Sequelize.define(("user"), {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        coverPic: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        profilePic: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        website: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },

    });

    return User;
}

module.exports = userModel;