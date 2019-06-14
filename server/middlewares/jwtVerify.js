const jwt = require('jsonwebtoken')
require('dotenv').config();

const verifyToken = (req, res, next) => {
    jwt.verify(req.headers.authentication, process.env.SECRET, (err, decoded)=>{
        if(err)
            next(err)
        else{
            req.user = decoded;
            next();
        }
    })
    
}

module.exports = verifyToken;