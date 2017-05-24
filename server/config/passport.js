// expose this function to our app using module.exports
module.exports = function(passport) {

  const User = require('../models').User;
  var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-login', new LocalStrategy({

            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, email, password, done) {
            var validPassword = function(userpass, password){
              return userpass === password;
            };
            User.findOne({ where: {email: email} }).then(function(user) {
              console.log(user);
              if(!user) {
                return done(null, false);
              }
              if (!validPassword(user.password, password)){
                return done(null, false);
              }
              return done(null, user);
        });
    }));
};
