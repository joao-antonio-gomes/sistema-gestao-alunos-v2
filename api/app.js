const express = require('express')
const router = express.Router()
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const cors = require('cors')
const students = require('./system/routes/students')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/sga', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado ao banco!')
}).catch(err =>
    console.log('Erro ao conectar ao banco: ' + err))

app.get('/', (req, res) => {
    res.json({ola: "mundo"})
})

app.use('/students', students)


const port = 9000
app.listen(port, () => {
    console.log('Servidor iniciado! http://localhost:9000/')
})
