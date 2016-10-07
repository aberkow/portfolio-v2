require('../css/normalize.css');
require('../css/stylesheet.css');

const $ = require('jquery');

const mobileMenuToggle = $('#mobile__menu-toggle');
const menu = $('#menu');
const mobileMenu = $('#mobile__menu');
const closeMenu = $('#close-menu');

$(document).ready(function() {
  mobileMenuToggle.on('click', function() {
    toggleMenu();
  });
});

const toggleMenu = evt => {
  if (menu.text() === 'MENU' || closeMenu.text() === 'CLOSE') {
    console.log('menu');
    menu.toggle();
    closeMenu.toggle();
    mobileMenu.toggle();
  }
};


// const toggleMenu = () => {
//   if (mobileMenu.text() === 'MENU') {
//     console.log('menu');
//   }
//   else {
//     console.log('not menu');
//   }
// }


// mobileMenuToggle.on('click', function() {
//   $('#menu').toggle();
//   closeMenu.toggle();
//   mobileMenu.toggle();
// });
// closeMenu.on('click', function() {
//   $('#menu').toggle();
//   closeMenu.toggle();
//   mobileMenu.toggle();
// });
