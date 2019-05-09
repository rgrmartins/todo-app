const Todo = require('./todo')

//criando os principais métodos (CRUD)
Todo.methods(['get', 'post', 'put', 'delete'])
//O update não valida algumas coisas
//new: true, é pra retornar depois de uma atualização o novo registro, por padrão retornava o antigo
//runValidators: true, é pra validar as validações do Schema também em update, por padrão não faz também
Todo.updateOptions({ new: true, runValidators: true })

module.exports =  Todo