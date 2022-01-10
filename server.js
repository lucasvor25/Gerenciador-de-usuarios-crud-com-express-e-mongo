const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require ('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

dotenv.config({path: 'config.env'})
const port = process.env.PORT || 8080

//log request
app.use(morgan('tiny'))

//Conecçao com o mongoDb
connectDB()

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//carregar arquivos css e js da pasta assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/router'))

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})