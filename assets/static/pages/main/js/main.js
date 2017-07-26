(function($) {
    $(document).ready(function() {

        var baseSwipperOpt = {
            spaceBetween: 0,
            autoplay: 6e3,
            loop: !0
        };

        // Топ
        new Swiper('section.main__s .swiper-container', baseSwipperOpt);

        // Список селекторов "сложных" слайдеров
        [
            // Команда
            'section.our__t .swiper-container',
            // Профили
            'section.our__pr .swiper-container',
            // Идеи
            'section.our__ideas .swiper-container'
        ].forEach(function(i) {
                // Объект блока
                var slider = $(i);
                // Опции
                var s = $.extend(baseSwipperOpt, {
                    loop: false,
                    autoplay: false,
                    nextButton: slider.find('.swiper-button-next'),
                    prevButton: slider.find('.swiper-button-prev')
                });

                // Команда
                new Swiper(slider, s);

            });

        $(window).paroller();




    });
})(jQuery);