// window.onload = function() {
//     document.getElementById('appointmenttime').datepicker.startDate =new Date();
//   };
$(function () {
    $('#datetimepickerDemo').datetimepicker({
        minDate:new Date()
    });
});

function validate() {
    var date = document.getElementById('appointmenttime').value;
    if (document.getElementById('appointment1').checked) {
        alert("YOU HAVE SELECTED APPOINTMENT FOR PRESENTATION AT TIME  " + date);
    } else {
        alert("YOU HAVE SELECTED APPOINTMENT FOR DOUBT CLARIRFICATION AT TIME  " + date);
    }
}


