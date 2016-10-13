//require('../images/laptop-with-notebook.jpeg');
//require('../css/normalize.css');
require('../css/critical.css');
//require('../css/stylesheet.css');

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
  // this way the open/close menu text can be anything instead of hardcoded.
  if (menu.text() !== '' || closeMenu.text() !== '') {
    menu.toggle();
    closeMenu.toggle();
    mobileMenu.toggle();
  }
};
