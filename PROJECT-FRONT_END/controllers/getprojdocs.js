const connection = require("../configs/connection");
const mysql = require('mysql2');

function getprojFinal(result1,projdocsObj) {
     return new Promise(function (resolve, reject) {
       result1.forEach((result, index) => {
         function names() {
           return new Promise(function (resolve, reject) {
             const query1 = `SELECT P.PROJECT_ID,S.NAME FROM STUDENT_DETAILS S,STUD_PROJ_DETAILS P WHERE S.USN=P.USN AND P.PROJECT_ID='${result.PROJECT_ID}';`;
             connection.query(query1, function (err, result2) {
               if (err) {
                 console.log(err);
               } else {
                 //console.log(result2);
                 resolve(result2);
               }
             });
           });
         }

         function projdocs() {
           return new Promise(function (resolve, reject) {
             const query2 = `SELECT LINK,STRUCTURE,STATUS FROM PROJECTS WHERE PROJECT_ID='${result.PROJECT_ID}'`;
             connection.query(query2, function (err, result2) {
               if (err) {
                 console.log(err);
               } else {
                 //console.log(result2[0]);
                 if (result2.length > 0)
                   resolve(result2[0]);
                 else {
                   reject("No projectdocs uploaded for Project id:" + result.PROJECT_ID);
                 }
               }
             });
           });
         }
         names().then((name) => {
           //namesObj.push(name);
           projdocs().then((projdoc) => {
             projdocsObj.push([...name, projdoc]);
             if (index == result1.length - 1) {
               console.log("loop done");
               resolve();
             }
           }, (err) => {
             console.log(err);
             projdocsObj.push([...name]);
             if (index == result1.length - 1) {
               console.log("loop done");
               resolve();
             }
           });
         });
       });
     });
   }

module.exports=getprojFinal;