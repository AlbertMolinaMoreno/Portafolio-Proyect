const { Sequelize } = require('sequelize'); //importamos sequelize

//Usamos la libreria dotenv para proteger nuestros datos 
//guardamos en connection la informacion de nuestra db usando sequelize

const connection = new Sequelize(process.env.DB_NAME , process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST, //Database server address
    dialect: 'mysql', // MySQL as db language
    port: process.env.DB_PORT, 
    logging: false    // Desactivamos el logging para no mostrar los detalles de las consultas SQL en la consola
});

//Comprueba que la conexión entre la db y la api se establezca
const checkDb = async () => {
    try {
        await connection.authenticate()
        console.log('Connection to DB succesfull')
    } catch (error) {
        console.log(error + 'function checkDb')
    }
}

//Esto añade los modelos creados en forma de tabla a la db
const syncModels = async () => {
    try {
        await connection.sync()
        console.log('Models added')
    } catch (error) {
        console.log('Models error')
    }
}

//Importamps los modulos
module.exports = {
    checkDb,
    syncModels,
    connection
}
