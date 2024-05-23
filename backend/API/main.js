const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

//Imprtamos las funciones que establezen la conexion con la base de datos
//y añade los modelos 
const {
    connection,
    checkDb,
    syncModels,
} = require('./database/index.js')
const initializeRelations = require('./database/relations.js')


async function checkAndSync() {
    try {
        await checkDb()
        await initializeRelations()
        await syncModels()
    } catch (error) {
        console.log(error)
    }
}


//Esto inicia el servidor 
const initializeAnListenExrpess = () => {
    try {
        app.use(express.json())
        .use(cors())
        .use(morgan('dev'))
       // .use('/api',require('./api/routes/index'))
        .listen(3000, () => {
            console.log('Server Started')
        })
    } catch (error) {
        console.log(error + "function initialize")
    } 
}


const starApi = async () => {
    try {
        await checkAndSync()
        await initializeAnListenExrpess()
    } catch (error) {
        console.log(error + "function starApi")
    } 
}

starApi()