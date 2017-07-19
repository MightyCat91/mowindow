(function ($) {
    var windowBrowser = $(window);
    windowBrowser.ready(function() {
        if (windowBrowser.width() < 745) {
            addSwiper();
        }
    });
    windowBrowser.resize(function() {
        if (windowBrowser.width() < 745) {
            addSwiper();
        }
        else {
            $('.main').removeClass('swiper-container');
            $('.columns__wrapper').removeClass('swiper-wrapper');
            $('.breeds').removeClass('swiper-slide');
            $('.swiper__btn').addClass('hidden');
        }
    });

    function addSwiper () {
        $('.main').addClass('swiper-container');
        $('.columns__wrapper').addClass('swiper-wrapper');
        $('.breeds').addClass('swiper-slide');
        $('.swiper__btn').removeClass('hidden');
        var swiper = new Swiper('.swiper-container', {
            nextButton: $('.specification__table .swiper-button-next'),
            prevButton: $('.specification__table .swiper-button-prev')
        })
    }


    windowBrowser.scroll(function() {
        var scrollTop = $(this).scrollTop();
        if(scrollTop > $('.listvennicza').offset().top) {
            $('.current[class != hidden]').addClass('hidden');
            $('.listvennicza__current').removeClass('hidden');
        } else {
            $('.current[class != hidden]').addClass('hidden');
            $('.sosna__current').removeClass('hidden');
        }

    });
})(jQuery);
