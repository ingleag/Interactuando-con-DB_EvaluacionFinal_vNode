var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    user: { type: String, required: true },
    pass: { type: String, required: true }
})


var login = mongoose.model('login', userSchema);

module.exports = login;
