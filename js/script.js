'use stript';

$(function() {

  // ハンバーガーメニュー
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger__active');
    if($('.hamburger').hasClass('hamburger__active')) {
      $('.header__nav').show();
      // $('.sub-header__nav').show();
    } else {
      $('.header__nav').hide();
      // $('.sub-header__nav').hide();
    }
  });


  // アコーディオン
  $('.faq__box__item').click(function() {
    $(this).children('.accordion').slideToggle();
    $(this).toggleClass('on');
    return false;
  });


  

});

