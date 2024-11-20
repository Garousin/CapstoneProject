let btn = document.querySelector('#btn'); // Select the toggle button
let sidebar = document.querySelector('.sidebar'); // Select the sidebar

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Toggle 'active' class on sidebar
  });