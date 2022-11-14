// regex

var username = document.getElementById('username');
var loginForm = document.getElementById('login-form');
var usernameErrPara = document.getElementById('businesstitle-err');

username.addEventListener('input', function(e) {
    var pattern = /^[a-zA-Z- ]{7,}$/;
    var currentValue = e.target.value;
    var valid = pattern.test(currentValue);

    if(valid) {
        usernameErrPara.style.display = 'none'
    } else {
        usernameErrPara.style.display = 'block'
    }
    

})