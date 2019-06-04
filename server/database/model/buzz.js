const mongoose = require('../utils/connection');
let categoryType=['Activity', 'Lost and Found']

const Schema = mongoose.Schema;
const buzzSchema = new Schema({
    description: {type: String, required: true},
    category: {type: String, enum:categoryType, required: true},
    attachment: String,
    createdAt: Date.now,
    like: Number,
    dislike: Number
});

const buzzModel = mongoose.model('Buzz', buzzSchema);

module.exports = buzzModel;