const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const userOperations = require('../database/controller/userOperations');
const User = require('../database/model/user');

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

            // userOperations.findOne({googleId})

            console.log("profile data is ", profile._json);
            var userData = new User({
                username: profile._json.name,
                emailId: profile._json.email,
                googleId: profile._json.sub,
                thumbnail: profile._json.picture,
            });
            userOperations.createUser(userData)

            done(null, userData);
        }
    )
);