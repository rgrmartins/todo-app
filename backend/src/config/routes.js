//Configurando as rotas
const express = require('express')
/* Assim é singleton a instancia é a mesma, porem quando chamamos uma instancia do server, const server = express(),
ai é uma nova a cada chamada*/

module.exports = function(server){

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}