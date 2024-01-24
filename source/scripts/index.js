/* в этот файл добавляет скрипты*/

const navMain = document.querySelector('.main-nav');
const burgerButton = document.querySelector('.burger-button');

navMain.classList.remove('main-nav--nojs');

burgerButton.addEventListener('click', () => {
  if (navMain.classList.contains('burger-button--closed')) {
    navMain.classList.remove('burger-button--closed');
    navMain.classList.add('burger-button--opened');
  } else {
    navMain.classList.add('burger-button--closed');
    navMain.classList.remove('burger-button--opened');
  }
});
