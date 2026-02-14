const yearEl = document.getElementById('year');
const themeToggle = document.getElementById('theme-toggle');

yearEl.textContent = new Date().getFullYear();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  themeToggle.textContent = dark ? '☀️' : '🌙';
});
