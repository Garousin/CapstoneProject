let btn = document.querySelector('#btn'); 
let sidebar = document.querySelector('.sidebar');
const logoutBtn = document.querySelector('#log_Btn');

btn.addEventListener('click', () => {
  sidebar.classList.toggle('active'); 
});

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

logoutBtn.addEventListener('click', function(e) {
  e.preventDefault();

  const userConfirmed = window.confirm("Are you sure you want to log out?");

  if (userConfirmed) {
    sessionStorage.clear();
    localStorage.clear();


    window.location.href = 'public/UI/Navbar/LoginPage/index.html';
  }
});
