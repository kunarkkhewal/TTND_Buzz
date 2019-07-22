const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const userOperations = require('../database/controller/userOperations');
const User = require('../database/model/user');
const roleData = require('../database/utils/roles.json');

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.ClientID,
            clientSecret: process.env.ClientSecret,
            callbackURL: "http://localhost:5000/auth/google/callback"
        },
        function (accessToken, refreshToken, profile, done) {
            let googleId = profile.id;
            let department;
            let role;

            if (profile._json.email === roleData.role.Hardware.email) {
                department = 'Hardware';
                role = 'admin'
            }
            else if (profile._json.email === roleData.role.Infrastructure.email) {
                department = 'Infrastructure';
                role = 'admin'
            }
            else if (profile._json.email === roleData.role.Others.email) {
                department = 'Others';
                role = 'admin'
            }
            userOperations.findOne(googleId)
                .then(data => {
                    if (!data) {
                        const userData = new User({
                            username: profile._json.name,
                            emailId: profile._json.email,
                            googleId: profile._json.sub,
                            thumbnail: profile._json.picture,
                            department,
                            role
                        });
                        userOperations.createUser(userData).then(res => done(null, userData));
                    }
                    else {
                        done(null, data)
                    }
                })
                .catch(err => console.log(`error in catch at passport ${err}`));
        }
    )
);