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


// Get references to elements
const editButton = document.getElementById('edit-btn');
const profileName = document.querySelector('.profile-name');
const profileId = document.querySelector('.profile-id');
const profileImage = document.querySelector('.profile-image');

// Define HTML structure for the edit form (only for name and profile picture)
const profileFormHTML = `
  <form id="edit-profile-form">
    <label for="name">Name:</label>
    <input type="text" id="name" value="${profileName.textContent}" required>
    <label for="profile-pic">Profile Picture URL:</label>
    <input type="text" id="profile-pic" value="${profileImage.src}" required>
    <button type="submit">Save</button>
    <button type="button" id="cancel-edit">Cancel</button>
  </form>
`;

// Event listener for the Edit button
editButton.addEventListener('click', function () {
  // Replace the profile information with the form
  const profileCard = document.querySelector('.profile-card');
  profileCard.innerHTML = profileFormHTML;

  // Event listener for Cancel button
  const cancelEditButton = document.getElementById('cancel-edit');
  cancelEditButton.addEventListener('click', function () {
    // Reload the original profile information (optional)
    location.reload(); // Or revert back without reloading
  });

  // Handle form submission (optional)
  const profileForm = document.getElementById('edit-profile-form');
  profileForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newName = document.getElementById('name').value;
    const newProfilePic = document.getElementById('profile-pic').value;

    // Update profile information on the page
    profileName.textContent = newName;
    profileImage.src = newProfilePic;

    // Replace the form with the updated profile info (name and profile picture only)
    profileCard.innerHTML = `
      <div class="profile-header">
        <img src="${newProfilePic}" alt="Profile Picture" class="profile-image">
        <div class="profile-info">
          <h2 class="profile-name">${newName}</h2>
          <p class="profile-id">${profileId.textContent}</p>
          <button class="edit-btn" id="edit-btn">Edit</button>
        </div>
      </div>
      <div class="profile-body">
        <div class="stats">
          <div class="stat-item">
            <i class="fas fa-gem"></i>
            <p class="stat-title">Gems</p>
            <p class="stat-value">120</p>
          </div>
          <div class="stat-item">
            <i class="fas fa-heart"></i>
            <p class="stat-title">Lives</p>
            <p class="stat-value">5</p>
          </div>
        </div>
        <div class="achievements">
          <h3>Achievements</h3>
          <ul class="achievement-list">
            <li><i class="fas fa-medal"></i> Completed 10 Levels</li>
            <li><i class="fas fa-star"></i> Top 1% Leaderboard</li>
            <li><i class="fas fa-book"></i> Debugging Expert</li>
          </ul>
        </div>
      </div>
    `;
  });
});
