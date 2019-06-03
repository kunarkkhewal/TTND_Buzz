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
            clientID: "65370549118-a1891hgidjokm92a9vsd6c6mvrvhnvmb.apps.googleusercontent.com",
            clientSecret: "6wYtAxydGSxWXeJCYbhoLwxT",
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