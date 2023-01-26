/* Author: Durgesh Nagarkar */
'use strict';

// Hamburger Function Starts -------------------------
var hamburger = document.getElementById('hamburger');
var nav = document.getElementsByTagName('nav')[0];
var main = document.getElementsByTagName('main')[0];
var hamburgerIcon = hamburger.children[0];
hamburger.onclick = toggleNavigation;

function toggleNavigation() {
  if (nav.style.maxHeight) {
    hideNavigation();
  } else {
    showNavigation();
  }
}

// Hides the Nav Bar when clicked outside Header
main.addEventListener('click', function () {
  hideNavigation();
});

// Function for Showing Nav Bar
function showNavigation() {
  nav.style.maxHeight = nav.scrollHeight + 'px';
  hamburgerIcon.setAttribute('class', 'fa fa-times');
  hamburgerIcon.style.marginTop = '3px';
  hamburgerIcon.style.marginRight = '3px';
}

// Function for Hiding Nav Bar
function hideNavigation() {
  nav.style.maxHeight = null;
  hamburgerIcon.setAttribute('class', 'fa fa-bars');
  hamburgerIcon.style.marginTop = '0';
  hamburgerIcon.style.marginRight = '0';
}

// ---------------------------------------------------

// To the top Function Starts ------------------------
var toTop = document.getElementById('to-top');
toTop.onclick = goToTop;

function goToTop() {
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.onscroll = function () {
  toggleToTop();
};

// Hides and Displays button according to some specified pixel
function toggleToTop() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementsByClassName('to-the-top')[0].style.display = 'block';
  } else {
    document.getElementsByClassName('to-the-top')[0].style.display = 'none';
  }
}
// ---------------------------------------------------