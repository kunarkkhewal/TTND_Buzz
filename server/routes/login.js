const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const chalk = require('chalk')

router.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/', session: false }),
    function (req, res) {
        let UserDetails = req.user;

        const userData = UserDetails.toJSON();

        jwt.sign(userData, process.env.SECRET, (err, token) => {
            console.log(chalk.cyan("token is =>>>>>>", token));
            if (err) {
                console.log(chalk.red(err));
            }
            else {
                res.redirect(`http://localhost:3000/token?q=${token}`);
            }
        });

        // res.send(UserDetails)
    }
);

module.exports = router;