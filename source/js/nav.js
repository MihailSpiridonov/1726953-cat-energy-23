/* stylelint-disable */

const nav = document.querySelector(".nav");
const headerToggle = document.querySelector(".header__toggle");

nav.classList.remove("nav--nojs");
headerToggle.addEventListener('click', function() {
if (nav.classList.contains('nav--close-mobile')) {
    nav.classList.remove('nav--close-mobile');
    nav.classList.add('nav--open-mobile');
    headerToggle.classList.add('header__toggle--close');
    headerToggle.classList.remove('header__toggle--open');
    } else {
      nav.classList.add('nav--close-mobile');
      nav.classList.remove('nav--open-mobile');
      headerToggle.classList.remove('header__toggle--close');
      headerToggle.classList.add('header__toggle--open');
    }
  });
