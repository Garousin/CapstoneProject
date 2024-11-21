const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.reg-link');
const btnPopup = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.exit');
const passwordField = document.querySelector('#toggle_password');
const showPasswordIcon = document.querySelector('#show_password');
const regField = document.querySelector('#reg_toggle');
const regIcon = document.querySelector('#reg_password');
// const requirments = [
//     { regex: /.{8,}/, index: 0 },
//     { regex: /[0 - 9]/, index: 1 },
//     { regex: /[a - z]/, index: 2 },
//     { regex: /[^A-Za-z0-9]/, index: 3 },
//     { regex: /[A - z]/, index: 4 },
// ]

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

showPasswordIcon.addEventListener("click", () => {
    passwordField.type = passwordField.type === "password" ? "text" : "password";
    showPasswordIcon.className = passwordField.type === "password" ? 'fa fa-eye' : 'fa fa-eye-slash';
});

regIcon.addEventListener("click", () => {
    regField.type = regField.type === "password" ? "text" : "password";
    regIcon.className = regField.type === "password" ? 'fa fa-eye' : 'fa fa-eye-slash';
});

// passwordField.addEventListener('keyup', (e) => {
//     requirments.forEach(item => {
//         const isValid = item.regex.test(e.target.value);
//     });
// });