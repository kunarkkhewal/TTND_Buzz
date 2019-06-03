const router = require('express').Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');


router.get(
    '/auth/google',
    passport.authenticate('google', {scope:['profile', 'email']})
);

router.get(
    '/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/', session: false}),
    function(req,res){
        let UserDetails = req.user;
        console.log("userDetails",UserDetails);
        var token = jwt.sign(UserDetails, 'SecretKey',(err,token)=>{
            console.log("token is =>>>>>>",token)
        });

        res.send(UserDetails);
    }
);

module.exports = router;