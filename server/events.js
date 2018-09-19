const Router = require('express').Router();
var User = require('./models/login.js')
var Events = require('./models/events.js')

// Login
Router.post('/login', function(req, res) {
  let usuario = req.body.user
  let clave = req.body.pass
  User.find({user:usuario,pass:clave}).exec(function(err, docs){
    if (err) {
      res.status(500)
      res.json(err)
    }else {
      if (docs.length > 0) {
        res.send("Validado")
      }else {
        res.send("Usuario no Autorizado")
      }
    }
  })
})

// Consultar todos los eventos
Router.get('/events/all', function(req, res){
  Events.find({}).exec(function(err, docs){
    if (err) {
      res.status(500)
      res.json(err)
    }else {
      if (docs.length > 0) {
        docs = JSON.parse(JSON.stringify(docs).split('"_id":').join('"id":'))
        res.send(docs)
      }else {
        res.send("")
      }
    }
  })
})

// Grabar evento
Router.post('/events/new', function(req, res){
  let evento = new Events({
        title: req.body.title,
        start: req.body.start,
        end: req.body.end
    })

    evento.save(function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro guardado")
    })
})

// Eliminar evento
Router.post('/events/delete/:id', function(req, res){
  let uid = req.params.id
  Events.remove({_id: uid}, function(error) {
    if(error) {
        res.status(500)
        res.json(error)
    }
    res.send("Registro eliminado")
  })
})

Router.post('/events/update', function(req, res){
  Events.update({_id: req.body.id}, { start: req.body.start, end: req.body.end}, function(error) {
    if(error) {
        res.status(500)
        res.json(error)
    }

    Events.find({}).exec(function(err, docs){
      if (err) {
        res.status(500)
        res.json(err)
      }else {
        if (docs.length > 0) {
          docs = JSON.parse(JSON.stringify(docs).split('"_id":').join('"id":'))
          res.send("Registro Actualizado")
        }else {
          res.send("")
        }
      }
    })
  })
})

module.exports = Router
