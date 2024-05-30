const { DataTypes } = require('sequelize');
const { connection } = require('../../database/index.js');

const Comment = connection.define('comment', {
  comment: {
    type: DataTypes.STRING, 
    allowNull: false,
  }, 
},
  {
   
    timestamps: false 
  });


module.exports = Comment;
