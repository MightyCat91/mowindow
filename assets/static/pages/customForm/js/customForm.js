(function ($) {
    //если ширина окна менее 992рх
    if ($(window).width() < 992) {
        $('.section__2 .swiper-wrapper > div').addClass('swiper-slide');
        $('.swiper__btn').removeClass('hidden');
        new Swiper('.section__2 .swiper-container', {
            nextButton: $('.section__2 .swiper-button-next'),
            prevButton: $('.section__2 .swiper-button-prev')
        });
        $('.section__3')
            .height($('.section__3 .image__container').height() + $('.section__3 .swiper-slide p').height())
            .addClass('mobile');
        $('.section__5')
            .height($('.section__5 .image__container').height() + $('.section__5 .swiper-slide p').height())
            .addClass('mobile');
    }

    new Swiper('.section__3 .swiper-container', {
        spaceBetween: 0,
        loop: false,
        autoplay: false,
        nextButton: $('.section__3 .swiper-button-next'),
        prevButton: $('.section__3 .swiper-button-prev'),
        onSlideChangeStart: function () {
            if ($('.section__3').hasClass('mobile')) {
                $('.section__3').height(
                    $('.section__3 .image__container').height() + $('.section__3 .swiper-slide-active p').height()
                );
            }
        }
    });

    new Swiper('.section__5 .swiper-container', {
        spaceBetween: 0,
        loop: false,
        autoplay: false,
        nextButton: $('.section__5 .swiper-button-next'),
        prevButton: $('.section__5 .swiper-button-prev'),
        onSlideChangeStart: function () {
            if ($('.section__5').hasClass('mobile')) {
                $('.section__5').height(
                    $('.section__5 .image__container').height() + $('.section__5 .swiper-slide-active p').height()
                );
            }
        }
    });
})(jQuery);
