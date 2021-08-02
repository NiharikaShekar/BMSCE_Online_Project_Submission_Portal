function validateForm() {
     let x = document.getElementById("link").value;
     let y =  document.getElementById("struc").value;
     if (x == "" || y=="") {
       alert("All fields must be filled out");
       return false;
     }
   }