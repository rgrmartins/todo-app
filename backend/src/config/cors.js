module.exports = function (req, res, next) {
    //Origem de requisições de qualquer URL
    res.header('Acess-Control-Allow-Origin', '*')
    //Métodos permitidos
    res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}