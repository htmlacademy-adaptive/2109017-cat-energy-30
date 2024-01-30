const navMain = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

mainNavToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
