const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index.js');

const User = connection.define('user', {
  username: {
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: DataTypes.STRING ,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'), 
    defaultValue: 'user'
  }  
},
  {
   
    timestamps: false 
  });


module.exports = User;
