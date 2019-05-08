//Configuração de acesso ao banco de dados do MONGO
//Mongoose é ORM e conector
const mongoose = require('mongoose')

//utilizaremos a promise do próprio Node e substituir a do mongoose
mongoose.Promise = global.Promise
//Conectando ao banco
module.exports = mongoose.connect('mongodb://localhost/todo')