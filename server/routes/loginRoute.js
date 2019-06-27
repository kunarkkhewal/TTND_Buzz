const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

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
            if (err) {
                res.status(400).send(err);
            }
            else {
                res.redirect(`http://localhost:3000/token?q=${token}`);
            }
        });
    }
);

module.exports = router;