(function ($) {
    //переключение изображений и текста по клику по toggle-кнопке
    $('.switch input').on('click', function () {
        $('.snow').toggleClass('hidden');
        $('.sun').toggleClass('hidden');
        $('.snow__text').toggleClass('hidden');
        $('.sun__text').toggleClass('hidden');
    });
})(jQuery);
