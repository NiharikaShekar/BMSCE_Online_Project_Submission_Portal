function validate() {
   var x = document.getElementById('purpose').selectedIndex;
  var y = document.getElementsByTagName("option")[x].value;
  //var l = document.getElementById('section').selectedIndex;
 // var m = document.getElementsByName("sctn")[l].value;
  //var table = document.getElementsByClassName('table1')[0];
    var date = document.getElementById('setappointment').value;
    // var b= document.getElementById('button');
    // var h= document.getElementById('header');
    // var i= document.getElementById('inst');
    // table.style.display = 'block';
    // b.style.display = 'none';
    // h.style.display = 'block';
    // i.style.display = 'none';
    // document.getElementById('t').innerHTML=date;
    if (y== 1) {
alert("YOU HAVE SELECTED APPOINTMENT FOR DOUBT CLARIRFICATION AT TIME " + date);
document.getElementById('appo').innerHTML="Doubt Clarification";
}
 else {
alert("YOU HAVE SELECTED APPOINTMENT FOR VIEWING PRESENTATIONS AT TIME " + date);
}
// if (m==3) {
// document.getElementById('s').innerHTML="A";
// }
// if(m==4) {
// document.getElementById('s').innerHTML="B";
// }
// if(m==5) {
// document.getElementById('s').innerHTML="C";
// }
// if(m==6)
// {
// document.getElementById('s').innerHTML="D";
// }
 }