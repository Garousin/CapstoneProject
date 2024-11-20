const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.reg-link');
const btnPopup = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.exit');
const passwordField = document.querySelector("#password");
const showPasswordIcon = document.getElementById("#toggle-password");


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

showPasswordIcon.addEventListener("click", function() {
  this.classList.toggle("fa-eye-slash"); // Toggle the icon class
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type); // Toggle the password field type
});
