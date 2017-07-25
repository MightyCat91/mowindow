(function ($) {
    // селектор палитры краски
    var rimmelColor = $('.rimmel__color');
    // селектор палитры цветов ручек
    var handleColor = $('.handle__color');

    // показ уголка соответствующего выбранному цвету
    rimmelColor.on('click', function () {
        var pushedColorId = $(this).children('img').data('id'),
            currentColorId = rimmelColor.filter('.active').children().data('id');
        if (pushedColorId != currentColorId) {
            $('.rimmel__corner__img img[data-id="' + pushedColorId + '"]').removeClass('hidden');
            $('.rimmel__corner__img img[data-id="' + currentColorId + '"]').addClass('hidden');
        }
        rimmelColor.removeClass('active');
        $(this).addClass('active');
    });

    // показ ручки соответствующей выбранному цвету
    handleColor.on('click', function () {
        var pushedColorId = $(this).children('img').data('id'),
            currentColorId = handleColor.filter('.active').children().data('id');
        if (pushedColorId != currentColorId) {
            $('.window__container img[data-id="' + pushedColorId + '"]').removeClass('hidden');
            $('.window__container img[data-id="' + currentColorId + '"]').addClass('hidden');
        }
        handleColor.removeClass('active');
        $(this).addClass('active');
    });

    if ($(window).width() < 992) {
        //инициализируем слайдер для палитры
        $('.rimmel__palit').addClass('swiper-wrapper');
        $('.rimmel__color').addClass('swiper-slide');
        $('.swiper__btn').removeClass('hidden');
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 6,
            nextButton: $('.swiper-button-next'),
            prevButton: $('.swiper-button-prev')
        })
    }

})(jQuery);