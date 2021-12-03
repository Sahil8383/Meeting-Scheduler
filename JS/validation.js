var email = document.forms['form']['email'];
var password = document.forms['form']['pass'];
var name = document.forms['form']['name'];

var error_name = document.getElementById('error_name');
var error_email = document.getElementById('error_email');
var error_pass = document.getElementById('error_pass');

email.addEventListener('textInput', email_var);
password.addEventListener('textInput', pass_var);

function validated(){
    if(email.value.length < 9){
        email.style.border = "1px solid red"
        error_email.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 6){
        password.style.border = "1px solid red"
        error_pass.style.display = "block";
        password.focus();
        return false;
    }
    
}
function email_var(){
    if(email.value.length >= 8){
        email.style.border = "1px solid silver"
        error_email.style.display = "none";
        return true;
    }
}

function pass_var(){
    if(password.value.length >= 5){
        password.style.border = "1px solid silver"
        error_pass.style.display = "none";
        return true;
    }
}
