const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const app = express()

// Capturar el body
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

//Conexion a la base de datos

//Creacion e Importacion de rutas

//Ruta del middleware

//Ruta Raiz
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Si funciona... vamos a comer!!!'
    })
})

//Arrancamos el servidor
const PORT = process.PORT || 9000
app.listen(PORT, () => {
    console.log(`Escuchad en el puerto: ${PORT}`)
})