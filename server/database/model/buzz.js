const mongoose = require('../utils/connection');
let categoryType=['Activity', 'Lost and Found']

const Schema = mongoose.Schema;
const buzzSchema = new Schema({
    description: {type: String, required: true},
    category: {type: String, enum:categoryType},
    attachment: String,
    email: String,
    createdAt: {type: Date, default: Date.now}, 
    like: [{emailId: {type: String}}],
    dislike: [{emailId: {type: String}}],
    thumbnail: String
});

const buzzModel = mongoose.model('Buzz', buzzSchema);

module.exports = buzzModel;