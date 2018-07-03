$('.offers-wrapper').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        dots: true,
      }
    }
  ]
});
 
jQuery(document).ready(function($){ //wait for the DOM to load
  if($(window).width() < 2000) { //check if screen width is less than 640px (i.e. mobile)
      $('#home-section').css({ 'min-height' : $(window).height() }); 
      // Fix the min-height of section px because of mobile keyboards, browsers' navbars, which change height of screen
  }
});


$('#menu-nav-controller').click(function() {
  $('.header-menu').slideToggle();
  $('.menu-nav-hamburger').toggleClass('animate');
});

$('#mobile-menu-controller').click(function() {
  $('#mobile-menu-wrapper').slideToggle('100');
  $('body').toggleClass('is-not-scrollable');
  $('.hamburger-menu').toggleClass('animate');
});


