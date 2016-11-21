require('../css/critical.css');

const $ = require('jquery');
// require('./before-after.min.js');

// for menu
const mobileMenuToggle = $('#mobile__menu-toggle');
const menu = $('#menu');
const mobileMenu = $('#mobile__menu');
const closeMenu = $('#close-menu');

//for before/after images
// const baSlider = $(".ba-slider");

$(document).ready(function() {
  mobileMenuToggle.on('click', function() {
    toggleMenu();
  });
  // baSlider.beforeAfter();




//end document.ready()
});

const toggleMenu = evt => {
  // this way the open/close menu text can be anything instead of hardcoded.
  if (menu.text() !== '' || closeMenu.text() !== '') {
    menu.toggle();
    closeMenu.toggle();
    mobileMenu.toggle();
  }
};



// const advance = () => {
//   const timeout;
//   const currentIndex = 0;
//
//   clearTimeout(timeout);
//   timeout = setTimeout(function () {
//     if (currentIndex < ($slides.length - 1)) {
//       move(currentIndex + 1);
//     } else {
//       move(0);
//     }
//   }, 1000);
// };

// $('.slider').each(function() {
//   const $this = $(this);
//   const $group = $this.find('.project__slide-group');
//   const $slides = $this.find('.slide');
//   const buttonArray = [];
//   let currentIndex = 0;
//   let timeout;
//
//   const move = newIndex => {
//     let animateLeft;
//     let slideLeft;
//
//     advance();
//
//     if ($group.is(':animated') || currentIndex === newIndex) {
//       return;
//     }
//
//     buttonArray[currentIndex].removeClass('active');
//     buttonArray[newIndex].addClass('.active');
//
//     if (newIndex > currentIndex) {
//       slideLeft = '100%';
//       animateLeft = '-100%';
//     } else {
//       slideLeft = '-100%';
//       animateLeft = '100%';
//     }
//
//     $slides.eq(newIndex).css( {left: slideLeft, display: block} );
//     $group.animate( {left: animateLeft}, function() {
//       $slides.eq(currentIndex).css( {display: 'none'} );
//       $slides.eq(newIndex).css( {left: 0} );
//       $group.css( {left: 0} );
//       currentIndex = newIndex;
//     });
//
//   };
//
//   const advance = () => {
//     clearTimeout(timeout);
//     timeout = setTimeout(function() {
//       if (currentIndex < ($slides.length - 1)) {
//         move(currentIndex + 1);
//       } else {
//         move(0);
//       }
//     }, 1000);
//   };
//
//   $.each($slides, function(index) {
//     const $button = $('<button type="button" class="slide-btn">&bull;</button>');
//     if (index === currentIndex) {
//       $button.addClass('active');
//     }
//     $button.on('click', function() {
//       move(index);
//     }).appendTo('.project__slide-buttons');
//     buttonArray.push($button);
//   });
//   advance();
// });
