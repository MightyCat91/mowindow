(function ($) {
    //смена цвета текстового блока в зависимости от цвета пикселя под курсором если не мобильное разрешение
    if ($(window).width() > 992){
        $(".pencil__area")
            .mouseover(function () {
                var hex = $(this).data('color');
                $('.pencil__text__container').css('background-color', hex)
            })
            .on('click', function (e) {
                e.preventDefault();
            });
    }
})(jQuery);