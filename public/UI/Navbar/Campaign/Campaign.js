let btn = document.querySelector('#btn'); 
let sidebar = document.querySelector('.sidebar');
const logoutB = document.querySelector('#logoutBtn');
const darkModeToggle = document.querySelector('#darkModeToggle');

// Toggle Sidebar
btn.addEventListener('click', () => {
  sidebar.classList.toggle('active'); 
});

// Dark Mode Toggle
darkModeToggle.addEventListener('change', (e) => {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

// Java and Python Buttons (Optional Navigation)
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

// Logout Functionality
logoutB.addEventListener('click', function(e) {
  e.preventDefault();

  const userConfirmed = window.confirm("Are you sure you want to log out?");

  if (userConfirmed) {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = '/public/UI/LoginPage/index.html';
  }
});
