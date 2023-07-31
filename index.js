// theme toggle

const toggler = document.getElementById('toggle');

function toggleTheme() {
  const appBody = document.querySelector("body");
  const appNav = document.querySelector(".nav");
  const container = document.querySelector(".container");
  const rightInfo = document.querySelector(".right-info");
  const daysList = document.querySelector(".days-list");
  const button = document.querySelector(".loc-button");

  appNav.classList.toggle("dark-mode")
  appBody.classList.toggle("dark-mode")
  rightInfo.classList.toggle("dark-mode")
  container.classList.toggle("dark-mode")
  daysList.classList.toggle("dark-mode")
  button.classList.toggle("dark-mode")
  toggler.classList.toggle("dark-mode")
}

window.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('dark-mode') === 'true';
    if (currentTheme) {
        toggleTheme();
    }
});

toggler.addEventListener('click', toggleTheme);
