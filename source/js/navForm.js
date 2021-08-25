/* stylelint-disable */

const nav = document.querySelector(".nav");
const formHeaderToggle = document.querySelector(".header__toggle--form");

nav.classList.remove("nav--nojs");
formHeaderToggle.addEventListener('click', function() {
  if (nav.classList.contains('nav--close-mobile')) {
    nav.classList.remove('nav--close-mobile');
    nav.classList.add('nav--open-mobile');
    formHeaderToggle.classList.remove('header__toggle--form-open');
    formHeaderToggle.classList.add('header__toggle--form-close');
    } else {
      nav.classList.add('nav--close-mobile');
      nav.classList.remove('nav--open-mobile');
      formHeaderToggle.classList.add('header__toggle--form-open');
      formHeaderToggle.classList.remove('header__toggle--form-close');
    }
  });
