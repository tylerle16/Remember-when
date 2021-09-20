const LocalStrategy = require('passport-local').Strategy;
const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = function (passport) {
    // middleware for passport
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (username, password, done) => {
            // look for the username in the db
            User.findOne({ username: username })
                .then(user => {
                    if (!user) {
                        return done(null, false, { message: 'That username is not registered' })
                    }
                    // user bcrypt to compare the hashed password to the whatever the user entered
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'Password incorrect' });
                        }
                    });
                })
                .catch(err => console.log(err));
        })
    );
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        })
    })
}