const { DataTypes } = require('sequelize');
const { connection } = require('../../database/index.js');

const Game = connection.define('game', {
  title: {
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING ,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING, 
    allowNull: false
  }  
},
  {
   
    timestamps: false 
  });


module.exports = Game;
