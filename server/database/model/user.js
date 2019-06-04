const mongoose = require('../utils/connection');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {type: String, required: true},
    emailId: {type: String, required:true},
    googleId: {type: String, required: true, unique: true},
    thumbnail: {type: String, required: true},
    role: {type: String, default: 'user'}
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;