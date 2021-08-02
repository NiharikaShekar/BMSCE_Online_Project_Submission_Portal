const express = require("express");
const connection = require("../configs/connection");
const bcrypt = require('bcrypt');
const passport = require('passport');
const validateSignup = require('../validation/validator');
const {validationResult}= require('express-validator');
const router = express.Router();
const saltRounds = 10;

router.get("/login", function(req, res) {
     res.render("teacherlogin",{loginerrors:req.flash("loginMessage")});
 });

 router.post("/login",
 passport.authenticate('local',{failureRedirect:'/teacheruser/login'}),
 function(req, res) {
       res.redirect("/teacher/viewreport");
     });


 router.get('/logout', function(req, res){  
     req.logout();
     // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
     // res.header('Expires', '-1');
     // res.header('Pragma', 'no-cache');
     res.redirect('/');
   console.log("Successfully Logged Out");
 });

 module.exports = router;