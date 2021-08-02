const connection = require("../configs/connection");
const mysql = require('mysql2');
// const passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function(passport) {
    //strategy for login
    passport.use('local', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with username and password from our form          
            connection.query(`SELECT * FROM USER_DETAILS WHERE USERNAME =  '${username}' ;`, function(err, rows) {
                console.log(rows);
                // console.log(password);
                if (err)
                    return done(err);
                if (!rows.length) {
                    console.log(rows[0]);
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                }
                bcrypt.compare(password, rows[0].PASSWORD, (err, isMatch) => {
                    if (err) {
                        console.log(err);
                    }
                    if (isMatch) {
                        return done(null, rows[0]);
                    } else {
                        // console.log(rows[0], password);
                        return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                    }
                });
            });
        }));
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        // console.log(user);
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id,done) {
        connection.query("Select * from USER_DETAILS where id = " + id, function(err, rows) {
            done(err, rows[0]);
    });  
    });
};