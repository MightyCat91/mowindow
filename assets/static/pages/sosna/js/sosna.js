(function ($) {
    //������������ ����������� � ������ �� ����� �� toggle-������
    $('.switch input').on('click', function () {
        $('.snow').toggleClass('hidden');
        $('.sun').toggleClass('hidden');
        $('.snow__text').toggleClass('hidden');
        $('.sun__text').toggleClass('hidden');
    });

    $('.fancy').fancybox();

    //����� ����� ���������� ����� � ����������� �� ����� ������� ��� �������� ���� �� ��������� ����������
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
