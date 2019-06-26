const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const chalk = require('chalk');

require('dotenv').config();
require('./config/cloudinary');

const route = require('./routes/index');
const userRoute = require('./routes/user');
const buzz = require('./routes/buzz');
const complaint = require('./routes/complaint');
const resolve = require('./routes/resolve');
require('./config/passport');


const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('client/build'));
app.use(passport.initialize());

app.use('/', route);
app.use('/user', userRoute)
app.use('/dashboard/buzz', buzz);
app.use('/dashboard/complaints', complaint);
app.use('/dashboard/resolve', resolve);


app.listen(PORT, ()=>{
    console.log(chalk.red(`App is UP and Running on PORT : ${PORT}`))
})