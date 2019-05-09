//configuração do servidor, das portas, etc, para publicar os webservices
const port = 3003

const bodyParser = require('body-parser')
const express = require('express')

//criando uma instancia do server (express)
const server = express()

//permite CORS
const allowCors = require('./cors')

//aplicando alguns middleware
//configurando que a cada chegada de requisição com irá fazer o parser é o bodyParser
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

//Registrando a porta
server.listen(port, function() {
    //tudo ok
    console.log(`BACKEND is running on port ${port}.`)
})

//precisa exportar o server para outros enxergarem
module.exports = server