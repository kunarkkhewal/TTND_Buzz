const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const chalk = require('chalk');

require('dotenv').config();
require('./config/cloudinary');
require('./config/passport');

const routes = require('./routes/routes');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static('client/build'));
app.use(passport.initialize());

app.use('/',routes)


app.listen(PORT, ()=>{
    console.log(chalk.red(`App is UP and Running on PORT : ${PORT}`))
})