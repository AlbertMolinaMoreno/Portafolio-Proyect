// Importamos DataTypes desde el módulo sequelize para definir tipos de columnas en la base de datos
const { DataTypes } = require('sequelize');

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require('../../database/index.js');


const User = connection.define('user', {
  
  name: {
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING ,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'client'), 
    defaultValue: 'client'
  }
  
},
  {
   
    timestamps: false 
  });


module.exports = User;
