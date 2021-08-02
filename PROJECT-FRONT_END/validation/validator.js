const connection = require("../configs/connection");
const { body, validationResult } = require('express-validator');

let validateSignup =[
    // body('username').exists().custom((value, { req }) => {
    //     connection.query(`SELECT USERNAME FROM USER_DETAILS;`,function(error,results){
    //         if(error){
    //             console.log(error);
    //         }
    //         else{
    //             if(results!=0){
    //             results.forEach((res)=>{
    //             if (value === res.USERNAME) 
    //               throw new Error('The Username already exists,please try other usernames');
    //             return false;
    //             });
    //         }
    //         else
    //     return true;
    // }
    // });
    // }),
    // .withMessage('Invalid USERNAME'),
    body('spassword')
    .exists()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
    .escape()
    .trim()
    .withMessage('Invalid password!!!'),
    body('cpassword').exists().custom((value, { req }) => {
        if (value !== req.body.spassword) {
            throw new Error('The passwords are not same!!!');
        }
        return true;
    })
];

module.exports=validateSignup;
   
