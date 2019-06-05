const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const chalk =  require('chalk')

router.get(
    '/auth/google',
    passport.authenticate('google', {scope:['profile', 'email']})
);

router.get(
    '/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/', session: false}),
    function(req,res){
        let UserDetails = req.user;
        console.log(chalk.red(req.user))
        console.log("userDetails",UserDetails);
        
        jwt.sign(UserDetails.toJSON(), 'SecretKey',{ expiresIn: '12h' }, (err,token)=>{
            console.log(chalk.cyan("token is =>>>>>>",token));
        });

        res.send(UserDetails);
    }
);

module.exports = router;