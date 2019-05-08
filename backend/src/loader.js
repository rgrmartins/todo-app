//porta de entrada da aplicação
//fazendo com que o server.js retorne uma instancia de server, para passar como parametro para o routes
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)