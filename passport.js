
const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID:"760503880789-1l1ufv32tmfi57j1v7cvqrg2i405b5i8.apps.googleusercontent.com",
        clientSecret:"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e",
        callbackURL: "http://localhost:3000/oauth2callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
    }
));