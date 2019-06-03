const mongoose  = require('mongoose');
const dbConfig = require('../utils/config');
mongoose.connect(dbConfig.dbURL, {useNewUrlParser: true});

const dbConnection = mongoose.connection;
dbConnection.once('open', ()=>{
    console.log("rahul ki faltu akalmandi uski gaand mai daal do");
})

module.exports = mongoose;