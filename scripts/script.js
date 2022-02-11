const passwordMessage = document.querySelector('.password-message');
const passConfirmMessage = document.querySelector('.pass-confirm-message');
const passwordInput = document.querySelector('#password');
const passConfirmInput = document.querySelector('#pass_confirm');
const submitButton = document.querySelector('.button');

//determine if password matches confirm password box input
let passwordCheck = function() {
    
    if (passConfirmInput.value != passwordInput.value) {
        passConfirmInput.className = 'error';
        passwordInput.className = 'error';
        passConfirmMessage.textContent = '* Passwords do not match';
    }
    else {
        passConfirmInput.className = 'valid';
        passwordInput.className = 'valid';
        passConfirmMessage.textContent = '';
        passwordMessage.textContent = '';
    }
}

//determines if there is text in the password field
let isPassword = function() {
    if (passwordInput.value.length == null || passwordInput.value.length == '') {
        passwordMessage.textContent = '* Password required';
        passConfirmInput.className = 'error';
        passwordInput.className = 'error';
    }
}

//only allow submission if the password fields are currently set as 'valid' inputs
let submitAttempt = function() {
    let canSubmit = passConfirmInput.className == 'valid' ? true : false;

    if (canSubmit) {
        submitButton.setAttribute('type', 'submit');
    }
    else {
        submitButton.setAttribute('type', 'button');
    }
}

submitButton.addEventListener('click', submitAttempt);
passConfirmInput.addEventListener('input', passwordCheck);
passConfirmInput.addEventListener('click', passwordCheck);
passwordInput.addEventListener('input', passwordCheck);
passwordInput.addEventListener('click', passwordCheck);
passwordInput.addEventListener('change', isPassword);