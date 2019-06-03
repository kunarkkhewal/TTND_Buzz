var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// passport.serializeUser(function(user,done){
//     done(null, user);
// })

// passport.deserializeUser(function(user,done){
//     done(null, user);
// })

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.ClientID,
            clientSecret: process.env.ClientSecret,
            callbackURL: "http://localhost:5000/auth/google/callback"
        },
        function(accessToken, refreshToken, profile, done){
            console.log("profile data is ",profile._json);
            var userData = {
                email: profile.emails[0].value,
                name: profile.displayName,
                // token: accessToken
            };
            done(null, userData);
        }
    )
);