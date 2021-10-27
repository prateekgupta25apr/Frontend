var lowercaseRegex=/[a-z]+/
var uppercaseRegex=/[A-Z]+/
var emailRegex=/^[a-zA-Z0-9._]+@[a-zA-Z.]+/
var numbersRegex=/[0-9]+/


function validateEmail(){
    var input=document.getElementById("email_input").value;

    if ((input=="" || input.length<6 || input.length>18 || (!(emailRegex.test(input))))){
        document.getElementById("email_input_error").style.color="red";
    }
    else document.getElementById("email_input_error").style.color="white";
}

function validatePassword(){
    var input=document.getElementById("password_input").value;

    if ((input=="" || input.length<8 || input.length>16 || !(uppercaseRegex.test(input)) ||
        !(lowercaseRegex.test(input)) || !(numbersRegex.test(input)))){
        document.getElementById("password_input_error").style.color="red";
    }
    else document.getElementById("password_input_error").style.color="white";
}


function validateSubmission(){
    validateEmail();
    validatePassword();
}