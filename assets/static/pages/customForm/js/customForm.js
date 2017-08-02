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
        prevButton: $('.custom__window__form .swiper-button-prev')
    });
    mySwiper.lockSwipes();

    if ($(window).width() < 992) {
        //new Swiper('.custom__window__form .swiper-container', {
        //    slidesPerView: 1,
        //    nextButton: $('.custom__window__form .swiper-button-next'),
        //    prevButton: $('.custom__window__form .swiper-button-prev')
        //});
        mySwiper.unlockSwipes();
        mySwiper.params.slidesPerView = 1;
    }

})(jQuery);
