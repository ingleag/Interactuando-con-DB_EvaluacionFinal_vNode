var mongoose = require('mongoose')
var Operaciones = require('./CRUD.js')

var url = "mongodb://localhost/agenda"

mongoose.connect(url)
Operaciones.insertarUsuario((error, result) => {
    if (error) console.log(error)
    console.log(result)
})
