'use stript';

$(function() {
  $('.faq__box__item').click(function() {
    $(this).children('.accordion').slideToggle();
    $(this).toggleClass('on');
    return false;
  });
  

});

