(function ($) {
    var windowBrowser = $(window),
        sosnaBlock = $('.sosna'),
        listvenniczaBlock = $('.listvennicza'),
        dubBlock = $('.dub'),
        fixedContainer = $('.fixed__container__wrapper'),
        fixedBlock = $('.fixed__block'),
        fixedBlockOffset = fixedBlock.offset().top;

    windowBrowser.ready(function() {
        if (windowBrowser.width() < 992) {
            addSwiper();
            fixedContainer.addClass('mobile');
        }
        if (fixedContainer.hasClass('mobile')) {
            if (windowBrowser.scrollTop() > fixedBlockOffset) {
                fixedContainer.addClass('fixed');
            } else {
                fixedContainer.removeClass('fixed');
            }
        }
    });

    windowBrowser.resize(function() {
        if (windowBrowser.width() < 992) {
            addSwiper();
            fixedContainer.addClass('mobile');
        }
        else {
            $('.main').removeClass('swiper-container');
            $('.columns__wrapper').removeClass('swiper-wrapper');
            $('.breed').removeClass('swiper-slide');
            $('.swiper__btn').addClass('hidden');
            fixedContainer.removeClass('mobile');
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
            bottomFixedContainer = fixedBlockOffset + $('.fixed__container__wrapper').height(),
            sosnaBlockOffset = sosnaBlock.offset().top,
            sosnaBlockHeight = sosnaBlock.height(),
            listvenniczaBlockOffset = listvenniczaBlock.offset().top,
            listvenniczaBlockHeight = listvenniczaBlock.height(),
            dot = [1/5,2/5,3/5,4/5,1];


        if (fixedContainer.hasClass('mobile')) {
            if (windowTop > fixedBlockOffset) {
                fixedContainer.addClass('fixed');
            } else {
                fixedContainer.removeClass('fixed');
            }
        } else {
            console.log('1');
            if (windowTop < 151) {
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
        }

        $(dot).each(function (index, element){
            dotScrolled('sosna', sosnaBlockOffset, sosnaBlockHeight, index, element);
            dotScrolled('listvennicza', listvenniczaBlockOffset, listvenniczaBlockHeight, index, element);
        });

        function dotScrolled(selectorClass, blockOffset, blockHeight, index, ratio) {
            console.log(selectorClass, blockOffset, blockHeight, index, ratio);
            if (windowTop > (blockOffset + blockHeight * ratio)) {
                $('.' + selectorClass + '__doted .dot:eq(' + index + ')').addClass('scrolled');
            } else {
                $('.' + selectorClass + '__doted .dot:eq(' + index + ')').removeClass('scrolled');
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
