(function ($) {
    var windowBrowser = $(window),
        sosnaOffset = $('#sosna').offset().top,
        listvenniczaOffset = $('#listvennicza').offset().top,
        dubOffset = $('#dub').offset().top,
        fixedBlock = $('.fixed__block'),
        fixedBlockOffset = fixedBlock.offset().top;

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
            $('.breed').removeClass('swiper-slide');
            $('.swiper__btn').addClass('hidden');
        }
    });

    function addSwiper () {
        $('.main').addClass('swiper-container');
        $('.columns__wrapper').addClass('swiper-wrapper');
        $('.breed').addClass('swiper-slide');
        $('.swiper__btn').removeClass('hidden');
        var swiper = new Swiper('.swiper-container', {
            nextButton: $('.specification__table .swiper-button-next'),
            prevButton: $('.specification__table .swiper-button-prev')
        })
    }


    windowBrowser.scroll(function() {
        var windowTop = $(this).scrollTop(),
            bottomFixed = windowTop + fixedBlockOffset + fixedBlock.height(),
            bottomFixedContainer = fixedBlockOffset + $('.fixed__container__wrapper').height();

        if (windowTop < fixedBlockOffset) {
            fixedBlock.removeClass('with__sticky__menu');
        }
        else {
            fixedBlock.addClass('with__sticky__menu');
            if (bottomFixed >= bottomFixedContainer) {
                fixedBlock.addClass('bottom');
                fixedBlock.removeClass('with__sticky__menu');
            } else {
                fixedBlock.removeClass('bottom');
                fixedBlock.addClass('with__sticky__menu');
            }
        }

        if(windowTop > $('.listvennicza').offset().top) {
            $('.current[class != hidden]').addClass('hidden');
            $('.listvennicza__current').removeClass('hidden');
        } else {
            $('.current[class != hidden]').addClass('hidden');
            $('.sosna__current').removeClass('hidden');
        }

    });
})(jQuery);
