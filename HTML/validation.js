window.addEventListener('load', function () {
    clearMessages();

    var formElem = this.document.querySelector('form');
    formElem.onsubmit = submitForm;
})

function clearMessages() {
    var messages = document.getElementsByClassName('alert-message')
    for (var i = 0; i < messages.length; i++) {
        messages[i].style.display = 'none';
    }
}

function showMessage(inputElement, message) {
    var messageElem = inputElement.parentNode.querySelector('span');
    messageElem.style.display = 'inline';
    messageElem.innerText = message;
    inputElement.focus() // 입력창을 클릭한 것과 같은 효과
}

function submitForm() {
    // account info
    var accountInput = document.querySelector("input[name='account']");
    var passwordInput = document.querySelector("input[name='password']");
    var passwordConfirmInput = document.querySelector("input[name='password2']");

    // select, radio, checkbox
    var selectInput = document.querySelector("select[name='birth-month']");
    var radioInput = document.querySelector("input[name='gender']:checked");
    var checkInput = document.querySelector("input[name='agree']");

    console.log(accountInput.value);
    console.log(passwordInput.value);
    console.log(passwordConfirmInput.value);

    console.log(selectInput.value);
    console.log(radioInput.value);
    console.log(checkInput.value);

    var success = true;
    if (accountInput.value.length < 6) {
        showMessage(accountInput, '6자리 이상 필수.');
        success = false;
    }

    if (passwordInput.value.length < 10) {
        showMessage(passwordInput, '10자리 이상 필수.');
        success = false;
    }

    if (passwordConfirmInput.value !== passwordInput.value) {
        showMessage(passwordConfirmInput, '동일한 비밀번호 필수.');
        success = false;
    }

    return success;
}