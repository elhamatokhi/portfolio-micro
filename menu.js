const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navMobile');
const links = document.querySelectorAll('.link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('open');
});

links.forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('open');
}));