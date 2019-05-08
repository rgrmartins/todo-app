//mapeamento de objetos para o Mongo
const restful = require('node-restful')
const mongoose = restful.mongoose

//Objeto mapeado
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

//exportando o módulo
module.exports = restful.model('Todo', todoSchema)