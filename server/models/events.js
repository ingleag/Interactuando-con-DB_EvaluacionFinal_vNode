var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    title: {type: String, required: true},
    start: {type: String, required: true},
    end: {type: String, required: false}
})


var events = mongoose.model('events', userSchema);

module.exports = events;
