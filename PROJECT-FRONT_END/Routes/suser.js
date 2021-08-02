const express = require("express");
const connection = require("../configs/connection");
const bcrypt = require('bcrypt');
const passport = require('passport');
const validateSignup = require('../validation/validator');
const {validationResult}= require('express-validator');
const router = express.Router();
const saltRounds = 10;
const nodemailer = require("nodemailer");


router.get("/signup", function(req, res) {
    res.render("signup", { errors: req.flash("errors") });
});

router.get("/login", function(req, res) {
    res.render("login", { loginerrors: req.flash("loginMessage"), signupmessage: req.flash("signupsuccessful") });
});

router.post("/signup",
         validateSignup,
         function(req, res) {
        const errorsArr = [];
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            const errors = Object.values(validationErrors.mapped());
            errors.forEach(function(item) {
                errorsArr.push(item.msg);
            });
            console.log(errorsArr);
            req.flash("errors", errorsArr);
            res.redirect("/suser/signup");
        } else {
            const username = req.body.username;
            const password = req.body.spassword;
            bcrypt.hash(password, saltRounds, function(err, hash) {
                var post = { USERNAME: username, PASSWORD: hash ,ROLE: "STUDENT" };
                var query = connection.query('INSERT INTO USER_DETAILS SET ?', post, function(error, results, fields) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Successfully Inserted the New User");
                        req.flash("signupsuccessful", "YOU HAVE SUCCESSFULLY REGISTERED, NOW PLEASE LOGIN WITH SAME USERNAME AND PASSWORD");
                        res.redirect("/suser/login");
                    }
                });
            });
        }
    });


router.post('/login',
    passport.authenticate('local', { failureRedirect: '/suser/login' }),
    function(req, res) {
        connection.query(`SELECT PROJECT_ID FROM PROJECT_DETAILS WHERE USER_ID = ${req.user.id};`, function(error, result) {
            if (!error) {
                if (result.length == 0) {
                    res.redirect('/student/submitprojectdetails');
                } else {
                    res.redirect("/student/report");
                }
            } else {
                console.log(error);
            }
        });
    });


router.get('/logout', function(req, res){  
    req.logout();
    // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    // res.header('Expires', '-1');
    // res.header('Pragma', 'no-cache');
    res.redirect('/');
  console.log("Successfully Logged Out");
});

router.get('/reset', function(req, res){
    res.render('reset', {email:0});
});
router.post("/gotmail", function(req, res){
    console.log(req.body);
    async function sendmail() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'System', // sender address
    to: req.body.mailid, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<a href = "http://localhost:3000/suser/changepw/${req.body.id}">change password</a>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendmail().catch(console.error);
res.redirect("/suser/login")
});

router.post('/reset', function(req, res){
    console.log("aaa",req.body);
    var uid = req.body.id;
    
    
    res.render('reset', {email:1, uid:uid});
        
    
});

router.get("/changepw/:team", function(req,res){
    console.log(req.params.team);
    var team = req.params.team;
    res.render('reset', {email:2, team:team});
});

router.post("/changepw", function(req, res){
    console.log("came");
    var pw = req.body.pw;
    bcrypt.hash(pw, saltRounds, function(err, hash){
        if(err){
            console.log(err);
        }else{
            connection.query(`UPDATE USER_DETAILS SET PASSWORD = '${hash}' WHERE USERNAME = '${req.body.id}';`, function(error, reslt){
                if(error){
                    console.log(error);
                }else{
                    console.log("Update successful!!!!!!!");
                    res.redirect("/suser/login");
                }
            });
        }
    });

});

module.exports = router;

