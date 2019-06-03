const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: {type: String, required: true},
    emailId: {type: String, required:true},
    googleId: {type: String, required: true, unique: true},
    thumbnail: {type: String, required: true},
    role: {type: String, default: 'user'}
});

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;