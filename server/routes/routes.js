const app = require('express')()

const verifyToken = require('../middlewares/jwtVerify');

const route = require('./loginRoute');
const userRoute = require('./userRoute');
const buzz = require('./buzzRoute');
const complaint = require('./complaintRoute');
const resolve = require('./resolveRoute');

app.use('/', route);
app.use(verifyToken);
app.use('/user', userRoute)
app.use('/dashboard/buzz', buzz);
app.use('/dashboard/complaints', complaint);
app.use('/dashboard/resolve', resolve);

module.exports = app