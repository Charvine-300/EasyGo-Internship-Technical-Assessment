//Mobile menu for Admin dashboard
const adminIcon = document.querySelector('#admin-burger');
const mobileMenu = document.querySelector('#mobile-menu');

adminIcon.addEventListener('click', () => {
  adminIcon.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
})