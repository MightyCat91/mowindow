(function($) {
  $(document).ready(function() {
    
    var isDesktop = $(window).width() >= 992;
    
    // Fixed menu
    $(window).scroll(function () {
      if ($(window).scrollTop() > 150) {
        $('div.main__info').addClass('fixed');
      } else {
        $('div.main__info').removeClass('fixed');
      }
    });    
    
    // Маски телефонов
    $('input[name="phone"]')
      .mask('+7 (000) 000-00-00', {})
      .focus(function() {
        $(this).attr('placeholder', '+7 (___) ___-__-__');        
      })
      .blur(function() { $(this).attr('placeholder', 'Телефон'); });
      
    // Fancy
    $('div.fancy').fancybox();
   
    if(window.location.hash && $(window.location.hash).hasClass('fancy')) {
      $.fancybox({
        href : window.location.hash
      });
    }
     
    // Изменение видимости меню
    $('div.mobile__menu, div.mobile__menu__close').click(function() {
      $('nav').toggleClass('isOpened');
    });
    
  });
})(jQuery);