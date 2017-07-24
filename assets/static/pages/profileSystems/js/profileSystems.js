(function ($) {
    //окно браузера
    var windowBrowser = $(window),
    //блок "Стандарт"
        block__1 = $('.profile__1'),
    //блок "Алю"
        block__2 = $('.profile__2'),
    //блок "Классик"
        block__3 = $('.profile__3'),
    //контейнер блока быстрой навигации
        fixedContainer = $('.fixed__container__wrapper'),
    //блок быстрой навигации
        fixedBlock = $('.fixed__block'),
    //смещение блока навигации относительно начала страницы
        fixedBlockOffset = fixedBlock.offset().top;

    //если ширина окна менее 992рх
    if (window.innerWidth < 992) {
        //инициализируем слайдер для таблицы
        $('.main').addClass('swiper-container');
        $('.columns__wrapper').addClass('swiper-wrapper');
        $('.columns__wrapper > div').addClass('swiper-slide');
        $('.swiper__btn').removeClass('hidden');
        new Swiper('.swiper-container', {
            nextButton: $('.specification__table .swiper-button-next'),
            prevButton: $('.specification__table .swiper-button-prev')
        });
        //контейнеру быстрой навигации устанавливаем флаг мобильного разрешения
        fixedContainer.addClass('mobile');
    }


    //если происходит скролл страницы
    windowBrowser.scroll(function () {
        //смещение скролла
        var windowTop = $(this).scrollTop(),
        //контейнер контента, к которому прявазан блок быстрой навигации
            sectionHeight = $('.wrapper'),
        //нижняя граница блока быстрой навигации
            bottomFixed = windowTop + fixedBlock.height(),
        //нижняя граница контейнера блока быстрой навигации - отступ
            bottomFixedContainer = sectionHeight.offset().top + sectionHeight.height() - 60,
        //смещение блока "Стандарт" относительно начала страницы
            block__1__Offset = block__1.offset().top,
        //высота блока "Стандарт"
            block__1__Height = block__1.height(),
        //смещение блока "Алю" относительно начала страницы
            block__2__Offset = block__2.offset().top,
        //высота блока "Алю"
            block__2__Height = block__2.height(),
        //части высоты блоков "Стандарт", "Алю", "Классик" соответсвующие точкам в блоке быстрой навигации
            dot = [0, 1/5, 2/5, 3/5, 4/5, 1];

        //если текущее разрешение - мобильное
        if (fixedContainer.hasClass('mobile')) {
            //если скролл страницы больше смещения блока быстрой навигации
            if (windowTop > fixedBlockOffset) {
                //контейнеру блока навигации устанавливаем фиксированное позиционирование вверху окна
                fixedContainer.addClass('fixed');
            } else {
                //контейнеру блока навигации устанавливаем абсолютное позиционирование под меню
                fixedContainer.removeClass('fixed');
            }
        } else {
            fixedContainer.height(sectionHeight.height());
            //если скролл страницы меньше высоты меню + высоты первого региона с формой + 1рх(для отсутсвия скачков)
            if (windowTop < 430) {
                fixedBlock.removeClass('fixed');
            }
            else {
                fixedBlock.addClass('fixed');
                //если нижняя граница блока навигации больше или равна нижней границе контейнера блока навигации
                if (bottomFixed >= bottomFixedContainer) {
                    //устанавливаем блоку навигации абсолютное позициониование и прижимаем к низу контейнера
                    fixedBlock.addClass('bottom');
                    fixedBlock.removeClass('fixed');
                } else {
                    //устанавливаем блоку навигации фиксированное позиционирование
                    fixedBlock.removeClass('bottom');
                }
            }
            //if (windowTop >= $('.profile__1 .image').offset().top - $('.main__info').height()) {
            //    $('.profile__1 .image').addClass('fixed');
            //    if (windowTop >= $('.profile__1 .image').offset().top - $('.main__info').height() +
            //        $('.profile__1 .image').height()) {
            //        $('.profile__1 .image').removeClass('fixed').addClass('bottom');
            //    }
            //}
        }

        //для каждой части высоты блоков "сосна","лиственница","дуб"
        $(dot).each(function (index, element) {
            //в зависимости от скролла страницы окрашиваем соответствующую точку между кнопками "сосна" и "лиственница"
            dotScrolled('profile__1', block__1__Offset, block__1__Height, index, element);
            //между кнопками "лиственница" и "дуб"
            dotScrolled('profile__2', block__2__Offset, block__2__Height, index, element);
        });

        /*
         * Окрашивание нужной точки
         * selectorClass - класс блока точек
         * blockOffset - смещение скроллируемого блока
         * blockHeight - высота скроллируемого блока
         * index - индекс точки
         * ratio - часть высоты блока соответствующая точке
         */
        function dotScrolled(selectorClass, blockOffset, blockHeight, index, ratio) {
            //если текущий скролл больше суммы смещения и части высоты скроллируемого блока за вычетом половины
            // высоты окна
            if (windowTop > (blockOffset + blockHeight * ratio - windowBrowser.height() / 2)) {
                $('.' + selectorClass + '__doted .dot:eq(' + index + ')').addClass('scrolled');
                imgScrolled(selectorClass, index+1);
            } else {
                $('.' + selectorClass + '__doted .dot:eq(' + index + ')').removeClass('scrolled');
            }
        }

        function imgScrolled(selectorClass, index) {
            $('.' + selectorClass + ' .image img').addClass('hidden');
            $('.' + selectorClass + ' .image img:eq(' + index + ')').removeClass('hidden');
        }

        //если текущий скролл больше смещения блока "Классик" за вычетом половины высоты окна
        if (windowTop > block__3.offset().top - windowBrowser.height() / 2) {
            //у текущей активной кнопки быстрой навигации убираем иконку
            $('.current[class != hidden]').addClass('hidden');
            //вешаем иконку активности на кнопку "Классик"
            $('.profile__3__current').removeClass('hidden');
        } else {
            //если текущий скролл больше смещения блока "Алю" за вычетом половины высоты окна
            if (windowTop > block__2.offset().top - windowBrowser.height() / 2) {
                $('.current[class != hidden]').addClass('hidden');
                //вешаем иконку активности на кнопку "Алю"
                $('.profile__2__current').removeClass('hidden');
            } else {
                $('.current[class != hidden]').addClass('hidden');
                //вешаем иконку активности на кнопку "Стандарт"
                $('.profile__1__current').removeClass('hidden');
            }
        }
    });

    //скрол при клике по кнопке быстрой навигации к соответствующему якорю
    fixedBlock.children('a').on('click', function () {
        event.preventDefault();
        //смещение блока с якорем относительно начала страницы - высоты меню с запасом
        var target_top= $('.'+this.href.split("#")[1]+'').offset().top - 150;
        //анимация скролла
        $('html, body').animate({scrollTop:target_top}, 'slow');
    });
})(jQuery);
