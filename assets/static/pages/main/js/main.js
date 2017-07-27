(function($) {
    $(document).ready(function() {

        var baseSwipperOpt = {
            spaceBetween: 0,
            autoplay: 6e3,
            loop: !0
        };

        // ���
        new Swiper('section.main__s .swiper-container', baseSwipperOpt);

        // ������ ���������� "�������" ���������
        [
            // �������
            'section.our__t .swiper-container',
            // �������
            'section.our__pr .swiper-container',
            // ����
            'section.our__ideas .swiper-container'
        ].forEach(function(i) {
                // ������ �����
                var slider = $(i);
                // �����
                var s = $.extend(baseSwipperOpt, {
                    loop: false,
                    autoplay: false,
                    nextButton: slider.find('.swiper-button-next'),
                    prevButton: slider.find('.swiper-button-prev')
                });

                // �������
                new Swiper(slider, s);

            });

        $(window).paroller();
    });


    var section = $('.colours'),
        scrollDirection = $(window).scrollTop();
    $(window).scroll(function() {
        var sectionTop = section.offset().top,
            windowTop = $(window).scrollTop();
        if (windowTop >= sectionTop - section.height() && windowTop > scrollDirection) {
            $('.sc__wrap').removeClass('start');
        }
        if (windowTop <= sectionTop && windowTop < scrollDirection) {
            $('.sc__wrap').addClass('start');
        }
        scrollDirection = windowTop;
    });
})(jQuery);