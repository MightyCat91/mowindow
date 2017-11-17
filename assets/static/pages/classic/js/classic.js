(function ($) {
    new Swiper('.image.swiper-container', {
        spaceBetween: 20,
        loop: false,
        autoplay: false,
        nextButton: $('.image .swiper-button-next'),
        prevButton: $('.image .swiper-button-prev')
    });
})(jQuery);
