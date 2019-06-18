const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes/index');
const bodyParser = require('body-parser');
const passport = require('passport');
const PORT = process.env.PORT || 5000;
const userRoute = require('./routes/user');
const buzz = require('./routes/buzz');
const complaint = require('./routes/complaint');
const chalk = require('chalk');

require('dotenv').config();
require('./config/cloudinary');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('client/build'));
app.use(passport.initialize());
require('./config/passport');
app.use('/', route);
app.use('/user', userRoute)
app.use('/dashboard/buzz', buzz);
app.use('/dashboard/complaints', complaint)


app.listen(PORT, ()=>{
    console.log(chalk.red(`App is UP and Running on PORT : ${PORT}`))
})