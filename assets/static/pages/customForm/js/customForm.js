(function ($) {
    new Swiper('.slider__1 .swiper-container', {
        spaceBetween: 0,
        loop: false,
        autoplay: false,
        nextButton: $('.slider__1 .swiper-button-next'),
        prevButton: $('.slider__1 .swiper-button-prev')
    });

    new Swiper('.slider__2 .swiper-container', {
        spaceBetween: 0,
        loop: false,
        autoplay: false,
        nextButton: $('.slider__2 .swiper-button-next'),
        prevButton: $('.slider__2 .swiper-button-prev')
    });

    var mySwiper = new Swiper('.custom__window__form .swiper-container', {
        slidesPerView: 2,
        nextButton: $('.custom__window__form .swiper-button-next'),
        prevButton: $('.custom__window__form .swiper-button-prev'),
        breakpoints: {
            // when window width is <= 992px
            992: {
                slidesPerView: 1
            }
        }
    });

    if ($(window).width() < 992) {
        mySwiper.unlockSwipes();
    } else {
        mySwiper.lockSwipes();
    }
})(jQuery);
