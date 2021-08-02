const connection = require("../configs/connection");
const mysql = require('mysql2');
const express = require('express');
const router = express.Router();
const insertMembers = require('../controllers/insertmembers');
var uuid = require('uuid');
const {
    report
} = require(".");
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get("/admindashboard", function (req, res) {
    if (req.isAuthenticated() && req.user.ROLE === "ADMIN") {
        connection.query(`SELECT COUNT(*) AS TEACHERNO FROM USER_DETAILS WHERE ROLE="TEACHER"`, function (err, result1) {
            if (err) {
                console.log(err);
            } else {
                connection.query(`SELECT PROJECT_ID,PROJECT_TITLE,MEMBERS_NO,SECTION FROM PROJECT_DETAILS;`, function (err, result2) {
                    if (err) {
                        console.log(err);
                    } else {
                        connection.query(`SELECT NAME,USN,EMAIL,PHONE_NO FROM STUDENT_DETAILS`, function (err, result3) {
                            if (err) {
                                console.log(err);
                            } else {
                                //    console.log(result1);
                                //    console.log(result2);
                                //    console.log(result3);
                                let total = result1[0].TEACHERNO + result2.length;
                                res.render("admindb", {
                                    usersno: total,
                                    project: result2,
                                    student: result3,
                                    teachers: result1[0].TEACHERNO
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});


router.get("/addTeacher", function (req, res) {
    if (req.isAuthenticated() && req.user.ROLE === "ADMIN") {
        res.render("addTeacher");
    } else {
        res.redirect("/adminuser/login");
    }
});

router.get("/appointTeacher", function (req, res) {
    if (req.isAuthenticated() && req.user.ROLE === "ADMIN") {
        connection.query(`SELECT TEACHER_ID,NAME,EMAIL,PHONE_NO FROM TEACHER_DETAILS;`, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                connection.query(`SELECT PROJECT_ID FROM PROJECT_DETAILS WHERE TEACHER_ID IS NULL;`, function (err, result1) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.render("appointTeacher", {
                            teacher: result,
                            project: result1
                        });
                    }
                });
            }
        });
    } else {
        res.redirect("/adminuser/login");
    }
});

router.get("/adminacademicdb", async function (req, res) {
    if (req.isAuthenticated() && req.user.ROLE === "ADMIN") {
        connection.query(`SELECT T1.PROJECT_ID,T1.PROJECT_TITLE,T1.NAME,T1.USN,T1.TOTAL_MARKS FROM (SELECT P.PROJECT_ID,P.PROJECT_TITLE,S.NAME,S.USN,G.TOTAL_MARKS FROM PROJECT_DETAILS P,STUDENT_DETAILS S,GRADES G 
            WHERE P.PROJECT_ID=G.PROJECT_ID AND G.USN=S.USN)T1 INNER JOIN(SELECT PROJECT_ID,MAX(TOTAL_MARKS) AS MAX_MARKS FROM GRADES G
             GROUP BY PROJECT_ID)T2 ON T1.PROJECT_ID=T2.PROJECT_ID AND T1.TOTAL_MARKS=T2.MAX_MARKS; `, async function (err, result1) {
            if (err) {
                console.log(err);
            } else {
                 connection.query(`SELECT P.PROJECT_ID,P.PROJECT_TITLE,AVG(G.TOTAL_MARKS) AS AVERAGE FROM PROJECT_DETAILS P,GRADES G 
                                    WHERE P.PROJECT_ID=G.PROJECT_ID GROUP BY P.PROJECT_ID ORDER BY AVERAGE DESC;`, async function (err, result2) {
                    if (err) {
                        console.log(err);
                    } else {                                                                
                        connection.query(`SELECT S.USN,S.NAME,COUNT(*) AS COUNT FROM STUDENT_DETAILS S,STUD_PROJ_DETAILS P WHERE 
                                            S.USN=P.USN GROUP BY S.USN;`, function (err, result3) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(result1);
                                console.log(result2);
                                console.log(result3);
                                res.render("adminacademicdb", {
                                    result1: result1,
                                    result2: result2,
                                    result3: result3
                                });
                            }
                        });
                    }
                });
            }
        });
    } else {
        res.redirect("/adminuser/login");
    }
});

router.post("/addTeacher", function (req, res) {
    console.log("mamu", req.body);
    var details = req.body;
    var pw = details.password;
    bcrypt.hash(pw, saltRounds, function (error, hash) {
        if (error) {
            console.log(error);
        } else {
            connection.query(`INSERT INTO USER_DETAILS SET ?`, {
                USERNAME: details.username,
                PASSWORD: hash,
                ROLE: details.role
            }, err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("1st insert success!");
                    connection.query(`SELECT id FROM USER_DETAILS WHERE USERNAME='${details.username}';`, function (er, rs) {
                        if (er) {
                            console.log(er);
                        } else {
                            console.log(rs[0]);
                            connection.query(`INSERT INTO TEACHER_DETAILS SET ?`, {
                                USER_ID: rs[0].id,
                                EMAIL: details.email,
                                PHONE_NO: details.phone,
                                NAME: details.name
                            }, eror => {
                                if (eror) {
                                    console.log(eror);
                                } else {
                                    console.log("2nd insert success!");
                                    res.redirect("/admin/addTeacher");
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});

router.post("/appointTeacher", function (req, res) {
    console.log(req.body);
    var result = Object.values(req.body);
    console.log(result);
    for (var i = 1; i < result.length; i++) {
        connection.query(`UPDATE PROJECT_DETAILS SET TEACHER_ID=${result[0]} WHERE PROJECT_ID=${result[i]}`, err => {
            if (err) {
                console.log(err);
            } else {
                console.log("Insert successful!");
            }
        });
    }
    res.redirect("/admin/appointTeacher");
});


module.exports = router;