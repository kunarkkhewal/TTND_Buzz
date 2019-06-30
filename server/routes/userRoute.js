const router = require('express').Router();
const userOperation = require('../database/controller/userOperations');

// GET USER INFORMATION
router.get('/', (req, res) => {
    userOperation.findOne(req.user.googleId)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

module.exports = router;