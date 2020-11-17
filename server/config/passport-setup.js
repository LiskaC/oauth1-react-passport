const bcrypt = require("bcryptjs");
const e = require("express");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/user.js");

module.exports = function(passport) {

    passport.use(new localStrategy((username, password, done) => {
          User.findOne({ username: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            bcrypt.compare(password, user.password, (err, result) => {
               if (err) throw err;
               if (result === true) {
                   return done(null, user);
               } else {
                   return done(null, false);
               }
            });
          });
        }
      ));


      passport.serializeUser((user, cb) => {
        cb(null, user.id);
      });

      passport.deserializeUser((id, cb) => {
          User.findOne({_id: id}, (err, user) => {
              cb(err, user);
          })
      })
    }