const app = require('express')()

const route = require('./login');
const userRoute = require('./user');
const buzz = require('./buzz');
const complaint = require('./complaint');
const resolve = require('./resolve');

app.use('/', route);
app.use('/user', userRoute)
app.use('/dashboard/buzz', buzz);
app.use('/dashboard/complaints', complaint);
app.use('/dashboard/resolve', resolve);

module.exports = app