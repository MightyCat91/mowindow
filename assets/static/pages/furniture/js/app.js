(function($) {
  $(document).ready(function() {
    new Swiper('.furniture__slider .swiper-container', {
      spaceBetween: 0,
      loop: false,
      autoplay: false,
      nextButton: $('.furniture__slider .swiper-button-next'),
      prevButton: $('.furniture__slider .swiper-button-prev')
    });


    // Галерея петель
    var galleryTop = new Swiper('.hinge__gallery__top');

    // Пагинатор галереи петель
    var galleryThumbs = new Swiper('.hinge__gallery__thumbs', {
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true
    });

    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    // Показ ручек
    $('.knobs__select').on('click', '.knob__item', function() {
      $('.knob__item').removeClass('knob__item__checked');
      $('.window__column img').removeClass('active');
      $(this).addClass('knob__item__checked');
      $('#' + $(this).data('id'))
          .css('transform', 'translateX(-' + $(this).data('offset') + 'px)')
          .addClass('active');
    });

    $('.knob__item').first().click();
  });
})(jQuery);