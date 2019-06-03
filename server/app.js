const express = require('express');
const app = express();
const route = require('./routes/index');
const bodyParser = require('body-parser');
const passport = require('passport');
const PORT = process.env.PORT || 5000;

require('dotenv').config();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('client/build'));
app.use(passport.initialize());
require('./config/passport');
app.use('/', route);


app.listen(PORT, ()=>{
    console.log(`App is UP and Running on PORT : ${PORT}`)
})