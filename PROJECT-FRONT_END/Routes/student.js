const connection = require("../configs/connection");
const mysql = require('mysql2');
const express = require('express');
const router = express.Router();
const insertMembers = require('../controllers/insertmembers');
var uuid = require('uuid');
const { report } = require(".");


router.get("/submitprojectdetails", function(req, res) {
    if (req.isAuthenticated() && req.user.ROLE==="STUDENT") {
        res.render("submitprojectdetails");
    } else {
        res.redirect("/suser/login");
    }
});

router.get("/report", function(req, res) {
    if (req.isAuthenticated() && req.user.ROLE==="STUDENT") {
        console.log("authenticated");
        connection.query(`SELECT PROJECT_TITLE,PROJECT_ID FROM PROJECT_DETAILS WHERE USER_ID ='${req.user.id}' ;`, function(err, result) {
            if (err) {
                console.log(err);
            } else {
               connection.query(`SELECT TEXT FROM NOTIFICATION WHERE PROJECT_ID = '${result[0].PROJECT_ID}';`, function(eror, ress){
                   if(eror){
                       console.log(eror);
                   }else{
                        connection.query(`SELECT LINK,TIMEOFUPLOAD,STATUS FROM DOCUMENTS WHERE PROJECT_ID ='${result[0].PROJECT_ID}';`, function(err, result1) {
                    if (err) {
                        console.log(err);
                    } else {
                        if (result1.length > 0) {
                            res.render("report", {
                                result: result1.length,
                                pname: result[0].PROJECT_TITLE,
                                projectid: result[0].PROJECT_ID,
                                plink: result1[0].LINK,
                                time: result1[0].TIMEOFUPLOAD,
                                status: result1[0].STATUS,
                                noti: ress
                            });
                        } else {
                            res.render("report", {
                                result: result1.length,
                                pname: result[0].PROJECT_TITLE,
                                projectid: result[0].PROJECT_ID,
                                status:result[0].STATUS,
                                noti:ress
                            });
                        }
                    }
                });
                   }
               });
            }
        });
    } else {
        res.redirect("/suser/login");
    }
});



router.get("/appointment", function(req, res) {
    if (req.isAuthenticated() && req.user.ROLE==="STUDENT") {
        connection.query(`SELECT PROJECT_TITLE, PROJECT_ID FROM PROJECT_DETAILS WHERE USER_ID =  '${req.user.id}' ;`, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                const done = { pname: result[0].PROJECT_TITLE, scheduled: 0 };
                connection.query(`SELECT * FROM APPOINTMENT WHERE PROJECT_ID ='${result[0].PROJECT_ID}' AND SCHEDULED_BY_ADMIN = 0;`, function(error, reslt) {
                    if (error) {
                        console.log(error);
                    } else {
                        connection.query(`SELECT TEXT FROM NOTIFICATION WHERE PROJECT_ID = '${result[0].PROJECT_ID}';`, function(eror, ress){
                   if(eror){
                       console.log(eror);
                   }else{
                     if (reslt.length > 0) {
                            console.log(reslt[0]);
                            done.scheduled = 1;
                            done.pid = reslt[0].PROJECT_ID;
                            done.sby = (reslt[0].SCHEDULED_BY_ADMIN === 0) ? "student" : "admin";
                            done.type = reslt[0].TYPEOFAPP;
                            done.date = reslt[0].ADATE;
                            done.approval = reslt[0].APPROVAL;

                        }
                        done.noti = ress;
                        res.render("appointment", done);
                   }
                });
                   }
                });
            }
        });
    } else {
        res.redirect("/suser/login");
    }

});

router.get("/psub", function(req, res){
    if (req.isAuthenticated() && req.user.ROLE==="STUDENT"){
        connection.query(`SELECT PROJECT_TITLE, PROJECT_ID FROM PROJECT_DETAILS WHERE USER_ID =  '${req.user.id}' ;`, function(err, result){
            if (err) {
                console.log(err);
            } else{
                var send = {pname: result[0].PROJECT_TITLE, submitted : 0};             
                  connection.query(`SELECT * FROM PROJECTS WHERE PROJECT_ID ='${result[0].PROJECT_ID}';`, function(error, reslt) {
                    if (error) {
                        console.log(error);
                    } else {
                        connection.query(`SELECT TEXT FROM NOTIFICATION WHERE PROJECT_ID = '${result[0].PROJECT_ID}';`, function(eror, ress){
                   if(eror){
                       console.log(eror);
                   }else{
                    if (reslt.length > 0) {
                            console.log(reslt[0]);
                            send.pid = reslt[0].PROJECT_ID;
                            send.submitted = 1;
                            send.link = reslt[0].LINK;
                            send.status= reslt[0].STATUS;
                            send.structure= reslt[0].STRUCTURE;
                            send.date= reslt[0].PDATE;
                        }
                        send.noti = ress;
                        res.render("psub", send);
                   }
                });                     
                    }
                });

            } 
        });
    }else{
        res.redirect("/suser/login");
    }
});

router.get("/grades", function(req, res){
    if (req.isAuthenticated() && req.user.ROLE==="STUDENT"){
        connection.query(`SELECT PROJECT_TITLE,PROJECT_ID FROM PROJECT_DETAILS WHERE USER_ID =  '${req.user.id}' ;`, function(err, result){
            if (err) {
                console.log(err);
            } else{              
                connection.query(`SELECT S.NAME,S.USN FROM GRADES G,STUDENT_DETAILS S WHERE G.USN=S.USN AND G.PROJECT_ID= '${result[0].PROJECT_ID}' ;`, function(err, result1){
                    if (err) {
                        console.log(err);
                    } else{               
                        console.log(result1);     
                        connection.query(`SELECT TEXT FROM NOTIFICATION WHERE PROJECT_ID = '${result[0].PROJECT_ID}';`, function(eror, ress){
                            if(eror){
                                console.log(eror);
                            }else{
                                res.render("pregrades",{pname:result[0].PROJECT_TITLE,res:result1, noti:ress}); 
                            }
                        });           
                                                                   
                    }
        });
    }
});
    }
    else{
        res.redirect("/suser/login");
    }
});



router.post('/submitprojectdetails', function(req, res) {
    console.log(req.body);
    console.log(req.user);
    let i = 1;
    var post = {
        USER_ID: req.user.id,
        PROJECT_TITLE: req.body.projectitle,
        MEMBERS_NO: req.body.dropdown2,
        SECTION: req.body.dropdown1,
    };
    var query = connection.query('INSERT INTO PROJECT_DETAILS SET ?', post, function(error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            console.log("Successfully Inserted Project Details of the New Team");
            res.render("submitteamdetails", { members: req.body.dropdown2, });
        }
    });
});

router.post('/submitteamdetails', function(req, res) {
    console.log(req.body);
    connection.query(`SELECT PROJECT_ID,MEMBERS_NO FROM PROJECT_DETAILS WHERE USER_ID =  '${req.user.id}' ;`, function(err, result) {
        console.log(result);
        if (err) {
            console.log(err);
        } else {
            console.log(result[0].PROJECT_ID);
            console.log(result[0].MEMBERS_NO);
            insertMembers(result, result[0].MEMBERS_NO, req, res);
        }
    });
});

router.post('/report', function(req, res) {
    let file = req.files.myFile
    console.log(file);
    var uuidname = uuid.v1(); // this is used for unique file name
    var filesrc = 'http://127.0.0.1:3000/docs/' + uuidname + file.name;
    connection.query(`SELECT PROJECT_ID FROM PROJECT_DETAILS WHERE USER_ID =  '${req.user.id}' ;`, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            var date = new Date().toLocaleDateString()+new Date().toLocaleTimeString();
            var insertData = {
                PROJECT_ID: result[0].PROJECT_ID,
                TYPE: "Report",
                LINK: filesrc,
                TIMEOFUPLOAD: date,
            };
            connection.query('INSERT INTO DOCUMENTS SET ?', insertData, (err) => {
                if (err) throw err
                else {
                    file.mv('public/docs/' + uuidname + file.name);
                    console.log("Inserted Successfully");
                    var line = {TEXT: "Your report has been submitted for verification", PROJECT_ID:result[0].PROJECT_ID};
                    connection.query(`INSERT INTO NOTIFICATION SET ?`, line , (eror)=>{
                        if(eror){
                            console.log("notification error!");
                        }else{
                            console.log("notification pushed!");
                            res.redirect("/student/report");
                        }
                    });
                    
                }
            });
        }
    });
});

router.post("/appointment", function(req, res) {
    console.log(req.body);
    connection.query(`SELECT PROJECT_ID FROM PROJECT_DETAILS WHERE USER_ID =  '${req.user.id}' ;`, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            var type = (req.body.appointment == 1) ? "presentation" : "doubt clarification";
            var date = req.body.appointmenttime;
            var insertData = {
                PROJECT_ID: result[0].PROJECT_ID,
                TYPEOFAPP: type,
                ADATE: date.substring(0, 10) + " " + date.substring(11, 16) + ":00",
                // APPROVAL: "PENDING..",
                SCHEDULED_BY_ADMIN: 0
            };
            console.log(insertData);
            connection.query('INSERT INTO APPOINTMENT SET ?', insertData, (err) => {
                if (err) throw err
                else {
                    console.log("Inserted Successfully");
                    var line = {TEXT: "You have requested for an appointment", PROJECT_ID:result[0].PROJECT_ID};
                    connection.query(`INSERT INTO NOTIFICATION SET ?`, line , (eror)=>{
                        if(eror){
                            console.log("notification error!");
                        }else{
                            console.log("notification pushed!");
                            res.redirect("/student/appointment");
                        }
                    });
                    
                }
            });
        }
    });

});

router.post("/psub", function(req, res){
    connection.query(`SELECT PROJECT_ID FROM PROJECT_DETAILS WHERE USER_ID =  '${req.user.id}' ;`, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            var d = new Date();
            var date = d.getFullYear()+"-"+ (d.getMonth()+1) +"-"+d.getDate();
            var insertData = {
                PROJECT_ID: result[0].PROJECT_ID,
                LINK:req.body.link,
                PDATE: date,
                STRUCTURE: req.body.structure
            };
            console.log(insertData);
            connection.query('INSERT INTO PROJECTS SET ?', insertData, (error) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("Inserted Successfully");
                    var line = {TEXT: "You have submitted your project", PROJECT_ID:result[0].PROJECT_ID};
                    connection.query(`INSERT INTO NOTIFICATION SET ?`, line , (eror)=>{
                        if(eror){
                            console.log(eror);
                        }else{
                            console.log("notification pushed!");
                            res.redirect("/student/psub");
                        }
                    });
                    
                }
            });
        }
    });
});

router.post("/grades",function(req,res){
    const query=`SELECT PROJECT_ID, HTML,JAVASCRIPT,CSS,REPORT,ORALCOMMUNICATION,
                CIE,TOTAL_SEE FROM GRADES WHERE USN ='${req.body.memberid}';`;
    connection.query(query,function(err, result) {
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            
            const googleChartArray=[
                [0,1 ],
                [2,result[0].HTML],
                [3,result[0].CSS],
                [4,result[0].JAVASCRIPT],
                [5,result[0].REPORT],
                [6,result[0].ORALCOMMUNICATION]
            ]
         const totalMarks=result[0].CIE+result[0].TOTAL_SEE;
         connection.query(`SELECT NAME,USN,EMAIL,PHONE_NO FROM STUDENT_DETAILS WHERE USN='${req.body.memberid}';`,function(err,result1){
             if(err){
                 console.log(err);
             }
             else{
                 console.log(result1);
                 connection.query(`SELECT REMARK FROM REMARKS WHERE PROJECT_ID = '${result[0].PROJECT_ID}';`, function(eror, resst){
                     if(eror){
                         console.log("kili", eror);
                     }else{
                        connection.query(`SELECT T.NAME FROM TEACHER_DETAILS T, PROJECT_DETAILS P  WHERE T.TEACHER_ID = P.TEACHER_ID AND P.PROJECT_ID = '${result[0].PROJECT_ID}';`, function(erer, resutt){
                            if(erer){
                                console.log(erer);
                            }else{
                                console.log(JSON.stringify(googleChartArray));
                                res.render("grades",{dataArray:JSON.stringify(googleChartArray),
                                cie:result[0].CIE*2,
                                see:result[0].TOTAL_SEE*2,
                                total:totalMarks,
                                name:result1[0].NAME,
                                usn:result1[0].USN,
                                email:result1[0].EMAIL,
                                remarks:resst,
                                tname:resutt[0],
                                phoneno:result1[0].PHONE_NO});
                            }
                        });
                        
                     }
                 });
             
           }
    });
}
});
});

module.exports = router;