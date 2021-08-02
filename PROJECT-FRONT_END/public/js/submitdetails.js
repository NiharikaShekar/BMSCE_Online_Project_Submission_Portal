

    function validate1(){
         var n = document.getElementById("num").value;
         var no = parseInt(n);

    //       var usn1=document.getElementById("usn1");
    //       var email1=document.getElementById("e1");       
    //       var phno1=document.getElementById("phone1");
          
    //      var u1result= usn1.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
    //      var e1result = email1.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
    //      var p1result=phno1.value.match('[0-9]{10}');
 
    //      var usn2=document.getElementById("usn2");
    //      var email2=document.getElementById("e2");       
    //      var phno2=document.getElementById("phone2");
         
    //     var u2result= usn2.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
    //     var e2result = email2.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
    //     var p2result=phno2.value.match('[0-9]{10}');

    //     var usn3=document.getElementById("usn3");
    //     var email3=document.getElementById("e3");       
    //     var phno3=document.getElementById("phone3");
        
    //    var u3result= usn3.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
    //    var e3result = email3.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
    //    var p3result=phno3.value.match('[0-9]{10}');

    //    var usn4=document.getElementById("usn4");
    //    var email4=document.getElementById("e4");       
    //    var phno4=document.getElementById("phone4");
       
    //   var u4result= usn4.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
    //   var e4result = email4.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
    //   var p4result=phno4.value.match('[0-9]{10}');

// var flag=0;
// for(var i=0;i<=no;i++){
//     if(document.getElementById("usn"+i).value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}')==document.getElementById("usn"+i).value)
//            {
//             document.getElementById('USN_error1').style.display='none';
//             if(flag==1){
//                 flag=1
//             }
//             else{
//                 flag=0;
//             }
//            }
//            else{
//             document.getElementById('USN_error1').style.display='block';
//            }
//            if(document.getElementById("email"+i).value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in')==document.getElementById("email"+i).value){
//             document.getElementById('semail_error1').style.display='none';
//             if(flag==1){
//                 flag=1
//             }
//             else{
//                 flag=0;
//             }
//            }
//            else{
//             document.getElementById('semail_error1').style.display='block';
//             flag=0;
//            } 
//            if(document.getElementById("phone"+i).value.match('[0-9]{10}')==document.getElementById("phone"+i).value){
//             document.getElementById('ph_error1').style.display='none';
//             if(flag==1){
//                 flag=1
//             }
//             else{
//                 flag=0;
//             }
//            }
//            else{
//             document.getElementById('ph_error1').style.display='block';
//             flag=0;
//            }
// }
// if(flag==0){
//         return false;
//     }
// if(flag==1){
//         return true;
//         // window.location.href="report.html";
//     }

     if(no==2)
     {
          var usn1=document.getElementById("usn1");
          var email1=document.getElementById("e1");       
          var phno1=document.getElementById("phone1");
          
         var u1result= usn1.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
         var e1result = email1.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
         var p1result=phno1.value.match('[0-9]{10}');
 
         var usn2=document.getElementById("usn2");
         var email2=document.getElementById("e2");       
         var phno2=document.getElementById("phone2");
         
        var u2result= usn2.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
        var e2result = email2.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
        var p2result=phno2.value.match('[0-9]{10}');
         var flag=0;
       if(u1result== usn1.value)
       {
        document.getElementById('USN_error1').style.display='none';
        flag=1;
       }
       else{
        document.getElementById('USN_error1').style.display='block';
       }

       if(e1result==email1.value){
        document.getElementById('semail_error1').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('semail_error1').style.display='block';
        flag=0;
       }

       if(p1result==phno1.value){
        document.getElementById('ph_error1').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('ph_error1').style.display='block';
        flag=0;
       }

       if(u2result==usn2.value){
        document.getElementById('USN_error2').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('USN_error2').style.display='block';
        flag=0;
       }

       if(e2result==email2.value){
        document.getElementById('semail_error2').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('semail_error2').style.display='block';
        flag=0;
       }

       if(p2result==phno2.value){
        document.getElementById('ph_error2').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('ph_error2').style.display='block';
        flag=0;
       }
       if(usn1.value.match(usn2.value)){
           alert("PLEASE ENTER UNIQUE USN FOR EACH MEMBER");
        flag = 0;}
if(flag==0){
    return false;
}
if(flag==1){
    return true;
}   
     }

else if(no==3)
{
    
          var usn1=document.getElementById("usn1");
          var email1=document.getElementById("e1");       
          var phno1=document.getElementById("phone1");
          
         var u1result= usn1.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
         var e1result = email1.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
         var p1result=phno1.value.match('[0-9]{10}');
 
         var usn2=document.getElementById("usn2");
         var email2=document.getElementById("e2");       
         var phno2=document.getElementById("phone2");
         
        var u2result= usn2.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
        var e2result = email2.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
        var p2result=phno2.value.match('[0-9]{10}');

        var usn3=document.getElementById("usn3");
        var email3=document.getElementById("e3");       
        var phno3=document.getElementById("phone3");
        
       var u3result= usn3.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
       var e3result = email3.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
       var p3result=phno3.value.match('[0-9]{10}');

    var flag=0;
    if(u1result== usn1.value)
    {
     document.getElementById('USN_error1').style.display='none';
     flag=1;
    }
    else{
     document.getElementById('USN_error1').style.display='block';
    }

    if(e1result==email1.value){
     document.getElementById('semail_error1').style.display='none';
     if(flag==1){
         flag=1
     }
     else{
         flag=0;
     }
    }
    else{
     document.getElementById('semail_error1').style.display='block';
     flag=0;
    }

    if(p1result==phno1.value){
     document.getElementById('ph_error1').style.display='none';
     if(flag==1){
         flag=1
     }
     else{
         flag=0;
     }
    }
    else{
     document.getElementById('ph_error1').style.display='block';
     flag=0;
    }

    if(u2result==usn2.value){
     document.getElementById('USN_error2').style.display='none';
     if(flag==1){
         flag=1
     }
     else{
         flag=0;
     }
    }
    else{
     document.getElementById('USN_error2').style.display='block';
     flag=0;
    }

    if(e2result==email2.value){
     document.getElementById('semail_error2').style.display='none';
     if(flag==1){
         flag=1
     }
     else{
         flag=0;
     }
    }
    else{
     document.getElementById('semail_error2').style.display='block';
     flag=0;
    }

    if(p2result==phno2.value){
     document.getElementById('ph_error2').style.display='none';
     if(flag==1){
         flag=1
     }
     else{
         flag=0;
     }
    }
    else{
     document.getElementById('ph_error2').style.display='block';
     flag=0;
    }

    if(u3result==usn3.value){
        document.getElementById('USN_error3').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('USN_error3').style.display='block';
        flag=0;
       }
   
       if(e3result==email3.value){
        document.getElementById('semail_error3').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('semail_error3').style.display='block';
        flag=0;
       }
   
       if(p3result==phno3.value){
        document.getElementById('ph_error3').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('ph_error3').style.display='block';
        flag=0;
       }
       if(usn1.value.match(usn2.value) || usn1.value.match(usn3.value) || usn2.value.match(usn3.value) ){
        alert("PLEASE ENTER UNIQUE USN FOR EACH MEMBER");
     flag = 0;
    }
       if(flag==0){
        return false;
    }
    if(flag==1){
        return true;
    }   
}

else if(no==4){
     var usn1=document.getElementById("usn1");
          var email1=document.getElementById("e1");       
          var phno1=document.getElementById("phone1");
          
         var u1result= usn1.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
         var e1result = email1.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
         var p1result=phno1.value.match('[0-9]{10}');
 
         var usn2=document.getElementById("usn2");
         var email2=document.getElementById("e2");       
         var phno2=document.getElementById("phone2");
         
        var u2result= usn2.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
        var e2result = email2.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
        var p2result=phno2.value.match('[0-9]{10}');

        var usn3=document.getElementById("usn3");
        var email3=document.getElementById("e3");       
        var phno3=document.getElementById("phone3");
        
       var u3result= usn3.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
       var e3result = email3.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
       var p3result=phno3.value.match('[0-9]{10}');

       var usn4=document.getElementById("usn4");
       var email4=document.getElementById("e4");       
       var phno4=document.getElementById("phone4");
       
      var u4result= usn4.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
      var e4result = email4.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
      var p4result=phno4.value.match('[0-9]{10}');
    var flag=0;
    if(u1result== usn1.value)
    {
     document.getElementById('USN_error1').style.display='none';
     flag=1;
    }
    else{
     document.getElementById('USN_error1').style.display='block';
    }

    if(e1result==email1.value){
     document.getElementById('semail_error1').style.display='none';
     if(flag==1){
         flag=1
     }
     else{
         flag=0;
     }
    }
    else{
     document.getElementById('semail_error1').style.display='block';
     flag=0;
    }

    if(p1result==phno1.value){
     document.getElementById('ph_error1').style.display='none';
     if(flag==1){
         flag=1
     }
     else{
         flag=0;
     }
    }
    else{
     document.getElementById('ph_error1').style.display='block';
     flag=0;
    }

    if(u2result==usn2.value){
     document.getElementById('USN_error2').style.display='none';
     if(flag==1){
         flag=1
     }
     else{
         flag=0;
     }
    }
    else{
     document.getElementById('USN_error2').style.display='block';
     flag=0;
    }

    if(e2result==email2.value){
     document.getElementById('semail_error2').style.display='none';
     if(flag==1){
         flag=1
     }
     else{
         flag=0;
     }
    }
    else{
     document.getElementById('semail_error2').style.display='block';
     flag=0;
    }

    if(p2result==phno2.value){
     document.getElementById('ph_error2').style.display='none';
     if(flag==1){
         flag=1
     }
     else{
         flag=0;
     }
    }
    else{
     document.getElementById('ph_error2').style.display='block';
     flag=0;
    }

    if(u3result==usn3.value){
        document.getElementById('USN_error3').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('USN_error3').style.display='block';
        flag=0;
       }
   
       if(e3result==email3.value){
        document.getElementById('semail_error3').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('semail_error3').style.display='block';
        flag=0;
       }
   
       if(p3result==phno3.value){
        document.getElementById('ph_error3').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('ph_error3').style.display='block';
        flag=0;
       }

       if(u4result==usn4.value){
        document.getElementById('USN_error4').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('USN_error4').style.display='block';
        flag=0;
       }
   
       if(e4result==email4.value){
        document.getElementById('semail_error4').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('semail_error4').style.display='block';
        flag=0;
       }
   
       if(p4result==phno4.value){
        document.getElementById('ph_error4').style.display='none';
        if(flag==1){
            flag=1
        }
        else{
            flag=0;
        }
       }
       else{
        document.getElementById('ph_error4').style.display='block';
        flag=0;
       }

       if(usn1.value.match(usn2.value) || usn1.value.match(usn3.value) || usn1.value.match(usn4.value) || usn2.value.match(usn3.value) || usn2.value.match(usn4.value) || usn3.value.match(usn4.value)   ){
        alert("PLEASE ENTER UNIQUE USN FOR EACH MEMBER");
     flag = 0;
    }
       if(flag==0){
        return false;       
    }
    if(flag==1){
        return true;
    }   
}
    }