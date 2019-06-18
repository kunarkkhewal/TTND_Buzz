const router = require('express').Router();
const userOperation = require('../database/controller/userOperations');
const chalk = require('chalk');
const verifyToken = require('../middlewares/jwtVerify')

router.get('/', verifyToken, (req,res) => {
    userOperation.findOne(req.user.googleId)
        .then(data=>{res.send(data)})
})

module.exports = router;