var User = require('./models/login.js')

module.exports.insertarUsuario = function(callback) {
    User.find({user:"Luis"}).exec((error, result) => {
      if (result.length > 0) {
        console.log(result)
        callback(null, "Usuario ya existe")
      } else{
        let Usuario = new User({user: "Luis", pass: "123" })

        Usuario.save((error) => {
            if (error) callback(error)
            callback(null, "Registro guardado")
        })
      }
    })
}
