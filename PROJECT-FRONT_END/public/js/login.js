window.onload = function() {
    const signUpButton = document.getElementById('sign-up-btn');
    const logInButton = document.getElementById('log-in-btn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
    logInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));
}

function clearlog() {
    document.forms['log-in-form']['email'].value = null;
    document.forms['log-in-form']['password'].value = null;
    document.getElementById('email_error').style.display = "none";
    document.getElementById('password_error').style.display = "none";
}

function clearsign() {
    document.forms['sign-up-form']['semail'].value = null;
    document.forms['sign-up-form']['spassword'].value = null;
    document.forms['sign-up-form']['cpassword'].value = null;
    document.forms['sign-up-form']['usn'].value = null;

    document.getElementById('semail_error').style.display = "none";
    document.getElementById('spassword_error').style.display = "none";
    document.getElementById('cpassword_error').style.display = "none";
    document.getElementById('usn_error').style.display = "none";
}

function validatelog() {
    var email = document.forms['log-in-form']['email'];
    var password = document.forms['log-in-form']['password'];
    var flag = 0;
    var email_error = document.getElementById('email_error');
    var password_error = document.getElementById('password_error');
    var result1 = email.value.match('[a-z]+.[a-z][a-z][0-9][0-9]@bmsce.ac.in');
    var result1a = email.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');
    if (result1 == email.value || result1a == email.value) {
        email_error.style.display = "none";
        flag = 1;
    } else {
        email_error.style.display = "block";
        // return false;
    }

    var result2 = password.value;
    if (result2.match(/[a-z]/g) && result2.match(/[A-Z]/g) && result2.match(/[0-9]/g) && result2.match(/[^a-zA-Z\d]/g) && result2.length >= 8) {
        password_error.style.display = "none";
        if (flag == 1) {
            flag = 1;
        }

    } else {
        password_error.style.display = "block";
        // return false;
        flag = 0;
    }
    if (flag == 0) {
        return false;
    }
    if (flag == 1) {
        return true;
    }


}

function validatesign() {
    var email = document.forms['sign-up-form']['semail'];
    var password = document.forms['sign-up-form']['spassword'];
    var cpassword = document.forms['sign-up-form']['cpassword'];
    var usn = document.forms['sign-up-form']['usn'];
    var flag = 0;
    var email_error = document.getElementById('semail_error');
    var password_error = document.getElementById('spassword_error');
    var cpassword_error = document.getElementById('cpassword_error');
    var usn_error = document.getElementById('usn_error');
    var result1 = email.value.match('[a-z]+.cs[0-9][0-9]@bmsce.ac.in');
    var result2 = usn.value.match('1BM[0-9][0-9][A-Z][A-Z][0-9]{3}');

    if (result2 == usn.value) {
        usn_error.style.display = "none";

        flag = 1;


    } else {
        usn_error.style.display = "block";
        flag = 0;
    }

    if (result1 == email.value) {
        email_error.style.display = "none";
        if (flag == 1) {
            flag = 1;
        }
    } else {
        email_error.style.display = "block";
        flag = 0;
    }

    var result3 = password.value;
    if (result3.match(/[a-z]/g) && result3.match(/[A-Z]/g) && result3.match(/[0-9]/g) && result3.match(/[^a-zA-Z\d]/g) && result3.length >= 8) {
        password_error.style.display = "none";
        if (flag == 1) {
            flag = 1;
        }

    } else {
        password_error.style.display = "block";
        flag = 0;
    }
    if (cpassword.value == password.value) {
        cpassword_error.style.display = "none";
        if (flag == 1) {
            flag = 1;
        }

    } else {
        flag = 0;
        cpassword_error.style.display = "block";
    }

    if (flag == 0) {
        return false;
    }
    if (flag == 1) {
        // window.location.href = "C:\Users\niranjan savanur\Documents\GitHub\BMSCE-ONLINE-PROJECT-SUBMISSION-PORTAL\PROJECT-FRONT_END\submitdetails.html";
        return true;
    }
}

