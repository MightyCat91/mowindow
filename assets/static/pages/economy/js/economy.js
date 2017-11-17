(function ($) {
    $('.winter__demonstrate').on('click', function () {
        $('.gif__wrapper').removeClass('summer').addClass('winter');
    });
    $('.summer__demonstrate').on('click', function () {
        $('.gif__wrapper').removeClass('winter').addClass('summer');
    });
})(jQuery);