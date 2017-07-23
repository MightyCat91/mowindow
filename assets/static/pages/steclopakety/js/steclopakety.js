(function ($) {
    //переключение изображений и текста по клику по toggle-кнопке
    $('.switch input').on('click', function () {
        $('.snow').toggleClass('hidden');
        $('.sun').toggleClass('hidden');
        $('.snow__text').toggleClass('hidden');
        $('.sun__text').toggleClass('hidden');
        $('.window__sun').toggleClass('hidden');
        $('.window__snow').toggleClass('hidden');
    });

    //если ширина окна менее 992рх
    if ($(window).width() < 992) {
        //инициализируем слайдер для таблицы
        $('.main').addClass('swiper-container');
        $('.columns__wrapper').addClass('swiper-wrapper');
        $('.breed').addClass('swiper-slide');
        $('.swiper__btn').removeClass('hidden');
        new Swiper('.swiper-container', {
            nextButton: $('.specification__table .swiper-button-next'),
            prevButton: $('.specification__table .swiper-button-prev')
        });
    }

    $('.fancy').fancybox();
})(jQuery);