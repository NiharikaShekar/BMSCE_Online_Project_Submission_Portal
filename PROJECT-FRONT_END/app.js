
const passport = require("passport");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mysql = require('mysql2');
const session = require('express-session');
const connectFlash = require("connect-flash");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const fileUpload = require('express-fileupload');
const nocache = require('nocache');

const app = express();
const port = 3000;

// app.use(express.static(__dirname + '/public'));
app.use(nocache());
//for bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
//Config view engine
require("./configs/viewEngine")(app);

app.use(connectFlash());

app.use(session({
    secret: "Our little Secret.",
    cookie: {
        maxAge: 4000000
    },
    resave: false,
    saveUninitialized: false
        // cookie: { secure: true }
}));


app.use(passport.initialize());
app.use(passport.session());

//We have created a local strategy for login only!!!
require("./controllers/passport")(passport);


app.use("/", require("./Routes/index"));

app.use("/suser", require("./Routes/suser"));
app.use("/student", require("./Routes/student"));
app.use("/teacheruser", require("./Routes/teacheruser"));
app.use("/teacher",require("./Routes/teacher"));
app.use("/adminuser",require("./Routes/adminuser"));
app.use("/admin",require("./Routes/admin"));
// app.use(function(req, res, next) {
//     if (!req.user)
//         res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
//     next();
// });

// app.use(function(req, res, next) {
//   res.set({
//     'Cache-Control': 'no-cache, no-store, must-revalidate',
//     'Pragma' : 'no-cache',
//     'Expires' : '0',
//     });
// //   next();
// });
app.listen(port, function() {
    console.log("Server started Successfully");
});