let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
const logoutBtn = document.querySelector('#log_Btn');
const body = document.querySelector("body")
modeSwitch = document.querySelector(".toggle_switch")
modeText = document.querySelector(".mode_text")

btn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light Mode";
  } else {
    modeText.innerText = "Dark Mode";
  }
})

document.querySelectorAll('.buttons button').forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent.trim();
    if (buttonText === "Java") {
      window.location.href = "";
    } else if (buttonText === "Python") {
      window.location.href = "";
    }
  });
});

logoutBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const userConfirmed = window.confirm("Are you sure you want to log out?");

  if (userConfirmed) {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = '/src/UI/Navbar/LoginPage/index.html';
  }
});
