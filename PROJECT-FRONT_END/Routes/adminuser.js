const express = require("express");
const connection = require("../configs/connection");
const bcrypt = require('bcrypt');
const passport = require('passport');
const validateSignup = require('../validation/validator');
const {validationResult}= require('express-validator');
const router = express.Router();
const saltRounds = 10;

router.get("/login", function(req, res) {
     res.render("adminlogin",{loginerrors: req.flash("loginMessage")});
 });


 router.post('/login',
 passport.authenticate('local', { failureRedirect: '/adminuser/login' }),
 function(req, res) {
      res.redirect("/admin/admindashboard");
 });


router.get('/logout', function(req, res){  
    req.logout();
    
    res.redirect('/adminuser/login');
  console.log("Successfully Logged Out");
});

 module.exports = router;