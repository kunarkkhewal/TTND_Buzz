const router = require('express').Router();
const resolveOperation = require('../database/controller/resolveOperations');
const verifyToken = require('../middlewares/jwtVerify');

router.get('/', (req, res) => {
    resolveOperation.fetchComplaint(req.user.emailId)
        .then(data => { res.send(data) })
        .catch(err => { res.send(err) })
});

router.patch('/', (req, res) => {
    resolveOperation.updateComplaint(req.body.status, req.body.issueId)
        .then(data => {
            console.log('in resolve route', data)
            res.send(data);
        })
        .catch(err => {
            console.log('resolve error: ',err)
        })
})

module.exports = router;