const http = require('http'),
      path = require('path'),
      Routing = require('./server/events.js'),
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');
var cors = require('cors');

const PORT = 3000
const app = express()

const Server = http.createServer(app)

mongoose.connect('mongodb://localhost/agenda')


app.use(express.static('client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())
app.use('/', Routing)

Server.listen(PORT, function() {
  console.log('Server is listeng on port: ' + PORT)
})
