// Validation of the Login form
var email = document.forms['boxy']['email'];
var password = document.forms['boxy']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validate() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 8) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        email.focus();
        return false;
    }
}

function email_Verify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid green";
        email_error.style.display = "none";
        email.focus();
        return true;
    }
}

function pass_Verify() {
    if (password.value.length >= 5) {
        password.style.border = "1px solid green";
        pass_error.style.display = "none";
        email.focus();
        return true;
    }
}