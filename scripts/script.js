const passwordMessage = document.querySelector('.password-message');
const passConfirmMessage = document.querySelector('.pass-confirm-message');
const passwordInput = document.querySelector('#password');
const passConfirmInput = document.querySelector('#pass_confirm');
const submitButton = document.querySelector('.button');

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

let isPassword = function() {
    if (passwordInput.value.length == null || passwordInput.value.length == '') {
        passwordMessage.textContent = '* Password required';
        passConfirmInput.className = 'error';
        passwordInput.className = 'error';
    }
}




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