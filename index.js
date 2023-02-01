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

const url = `mongodb+srv://Oscar_Garcia_Ponce:${process.env.PASSWORD}@atlascluster.bxfuttu.mongodb.net/${process.env.DBNAME}`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a la base de datos!!!'))
.catch((error) => console.log('Error: ' + error))

//Creacion e Importacion de rutas
const authRoutes = require('./routes/auth')

//Ruta del middleware
app.use('/api/user', authRoutes)

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