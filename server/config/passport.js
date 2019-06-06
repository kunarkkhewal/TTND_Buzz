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

            let googleId = profile.id;
            userOperations.findOne(googleId).then(data => {
                if (!data) {
                    var userData = new User({
                        username: profile._json.name,
                        emailId: profile._json.email,
                        googleId: profile._json.sub,
                        thumbnail: profile._json.picture,
                    });
                    // console.log(`data=${data}`);
                    // console.log(`userdata=${userData}`)
                    userOperations.createUser(userData).then(res=>done(null, userData));
                }
                else{
                    done(null, data)
                }
            })
            .catch(err=>console.log(`error in catch at passport ${err}`));

        }
    )
);