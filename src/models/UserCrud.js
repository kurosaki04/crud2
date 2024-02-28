const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   
const UserCrud = sequelize.define('UserCrud', {
    
    first_name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
     
    email: {
        type: DataTypes.STRING,
        allowNull: false

    },

    password: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
   birthday: {
        type: DataTypes.DATE,
        allowNull: false

    },

});

module.exports = UserCrud;