const router = require('express').Router();
const resolveOperation = require('../database/controller/resolveOperations');
const verifyToken = require('../middlewares/jwtVerify');

router.get('/', verifyToken,  (req, res)=>{
    resolveOperation.fetchComplaint(req.user.emailId)
        .then(data=>{res.send(data)})
        .catch(err=>{res.send(err)})
});


module.exports = router;