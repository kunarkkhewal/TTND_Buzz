const router = require('express').Router();
const resolveOperation = require('../database/controller/resolveOperations');

router.get('/', (req, res) => {
    resolveOperation.fetchComplaint(req.user.emailId)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(404).send(err)
        })
});

router.patch('/', (req, res) => {
    resolveOperation.updateComplaint(req.body.status, req.body.issueId)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

module.exports = router;