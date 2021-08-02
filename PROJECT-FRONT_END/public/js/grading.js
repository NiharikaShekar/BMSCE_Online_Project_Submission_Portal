function myFunction() {
  var x, text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;

  // Get the value of the input field with id="numb"
  x = document.getElementById("quantity").value;
  a = document.getElementById("quantity2").value;
  b = document.getElementById("quantity3").value;
  c = document.getElementById("quantity4").value;
  d = document.getElementById("quantity5").value;
  e = document.getElementById("quantity6").value;
  f = document.getElementById("quantity7").value;
  g = document.getElementById("quantity8").value;
  h = document.getElementById("quantity9").value;
  i = document.getElementById("quantity10").value;
  j = document.getElementById("quantity11").value;
  k = document.getElementById("quantity12").value;
  l = document.getElementById("quantity13").value;
  m  = document.getElementById("quantity14").value;
  n = document.getElementById("quantity15").value;
  o = document.getElementById("quantity16").value;
  p = document.getElementById("quantity17").value;
  q = document.getElementById("quantity18").value;

  // If x is Not a Number or less than one or greater than 10
  if (x ==null  || x =="") {
    text = "Input not valid";
  }
  else if(x<0 || x>10){

      alert("INPUT SHOULD BE BETWEEN 0-10");
  }
  else if (a ==null  || a =="") {
    text = "Input not valid";
  } 
  else if(a<0 || a>10){

    alert("INPUT SHOULD BE BETWEEN 0-10");
}
else if (b ==null  || b =="") {
    text = "Input not valid";
  } 
  else if(b<0 || b>10){

    alert("INPUT SHOULD BE BETWEEN 0-10");
}
else if (c ==null  || c =="") {
    text = "Input not valid";
  } 
  else if(c<0 || c>10){

    alert("INPUT SHOULD BE BETWEEN 0-10");
}
 
  else if (d ==null  || d =="") {
    text = "Input not valid";
  } 
  else if(d<0 || d>5){

    alert("INPUT SHOULD BE BETWEEN 0-5");
}
else if (e ==null  || e =="") {
    text = "Input not valid";
  } 
  else if(e<0 || e>5){

    alert("INPUT SHOULD BE BETWEEN 0-5");
}
else if (f ==null  || f =="") {
    text = "Input not valid";
  } 
  else if(f<0 || f>50){

    alert("INPUT SHOULD BE BETWEEN 0-50");
}
else if (g ==null  || g =="") {
    text = "Input not valid";
  } 
  else if(g<0 || g>50){

    alert("INPUT SHOULD BE BETWEEN 0-50");
}
 
  else if (h ==null  || h =="") {
    text = "Input not valid";
  } 
  else if(h<0 || h>100){

    alert("INPUT SHOULD BE BETWEEN 0-100");
}
else if (i ==null  || i =="") {
    text = "Input not valid";
  } 
  else if(i<0 || i>10){

    alert("INPUT SHOULD BE BETWEEN 0-10");
}
else if (j ==null  || j =="") {
    text = "Input not valid";
  } 
  else if(j<0 || j>10){

    alert("INPUT SHOULD BE BETWEEN 0-10");
}
else if (k ==null  || k =="") {
    text = "Input not valid";
  } 
  else if(k<0 || k>10){

    alert("INPUT SHOULD BE BETWEEN 0-10");
}
else if (l ==null  || l =="") {
    text = "Input not valid";
  } 
  else if(l<0 || l>10){

    alert("INPUT SHOULD BE BETWEEN 0-10");
}
 
  else if (m ==null  || m =="") {
    text = "Input not valid";
  } 
  else if(m<0 || m>5){

    alert("INPUT SHOULD BE BETWEEN 0-5");
}
else if (n ==null  || n =="") {
    text = "Input not valid";
  } 
  else if(n<0 || n>5){

    alert("INPUT SHOULD BE BETWEEN 0-5");
}
else if (o ==null  || o =="") {
    text = "Input not valid";
  } 
  else if(o<0 || o>50){

    alert("INPUT SHOULD BE BETWEEN 0-50");
}
else if (p ==null  || p =="") {
    text = "Input not valid";
  } 
  else if(p<0 || p>50){

    alert("INPUT SHOULD BE BETWEEN 0-50");
}
 
  else if (q ==null  || q =="") {
    text = "Input not valid";
  } 
  else if(q<0 || q>100){

    alert("INPUT SHOULD BE BETWEEN 0-100");
}
  else {
    alert("Input OK ");
     }
}