// resize images to be square
var resizeImages = function() {
  $('.client').height($('.client').width());
  $('h1').css('top', $('client').height / 2);
}

// show/hide nav
var expandNav = function() {
  $('header').click(function() {
    $('nav').toggleClass('hidden');    
    $('main').toggleClass('blur');    
  });
}

$(window).resize(resizeImages);

$(document).ready(function() {
  // make sure images are always square
  resizeImages();
  expandNav();
});

    


