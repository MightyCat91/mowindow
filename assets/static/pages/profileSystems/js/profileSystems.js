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
        fixedBlockOffset = fixedBlock.offset().top,
        header__1 = $('.profile__1 .h2'),
        header__1__offset = header__1.offset().top - 260,
        header__2 = $('.profile__2 .h2'),
        header__2__offset = header__2.offset().top - 110,
        header__3 = $('.profile__3 .h2'),
        header__3__offset = header__3.offset().top;

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
            header__1__bottom = windowTop + header__1.height(),
            header__2__bottom = windowTop + header__2.height(),
            header__3__bottom = windowTop + header__3.height(),
        //контейнер контента, к которому прявазан блок быстрой навигации
            sectionHeight = $('.wrapper'),
        //контейнер блока фиксированного изображения
            containerFixedImageBlock__1 = $('.profile__1 .image__container'),
        //блок фиксированного изображения
            fixedImageBlock__1 = containerFixedImageBlock__1.find('.image__fixed__block'),
        //смещение блока изображения относительно начала страницы - высота меню - хедер блока
            offsetContainerFixedImageBlock__1 = containerFixedImageBlock__1.offset().top - 194,
        //нижняя граница блока изображения
            bottomImageFixedBlock__1 = windowTop + fixedImageBlock__1.height(),
        //нижняя граница контейнера блока фиксированного изображения
            bottomContainerImageFixedBlock__1 = containerFixedImageBlock__1.offset().top + containerFixedImageBlock__1.height() - 190,
        //контейнер блока фиксированного изображения
            containerFixedImageBlock__2 = $('.profile__2 .image__container'),
        //блок фиксированного изображения
            fixedImageBlock__2 = containerFixedImageBlock__2.find('.image__fixed__block'),
        //смещение блока изображения относительно начала страницы - высота меню - хедер блока
            offsetContainerFixedImageBlock__2 = containerFixedImageBlock__2.offset().top - 194,
        //нижняя граница блока изображения
            bottomImageFixedBlock__2 = windowTop + fixedImageBlock__2.height(),
        //нижняя граница контейнера блока фиксированного изображения
            bottomContainerImageFixedBlock__2 = containerFixedImageBlock__2.offset().top + containerFixedImageBlock__2.height() - 190,
        //контейнер блока фиксированного изображения
            containerFixedImageBlock__3 = $('.profile__3 .image__container'),
        //блок фиксированного изображения
            fixedImageBlock__3 = containerFixedImageBlock__3.find('.image__fixed__block'),
        //смещение блока изображения относительно начала страницы - высота меню - хедер блока
            offsetContainerFixedImageBlock__3 = containerFixedImageBlock__3.offset().top - 194,
        //нижняя граница блока изображения
            bottomImageFixedBlock__3 = windowTop + fixedImageBlock__3.height(),
        //нижняя граница контейнера блока фиксированного изображения
            bottomContainerImageFixedBlock__3 = containerFixedImageBlock__3.offset().top + containerFixedImageBlock__3.height() - 190,
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
        //смещение блока "Классик" относительно начала страницы
            block__3__Offset = block__3.offset().top,
        //высота блока "Классик"
            block__3__Height = block__3.height(),
        //части высоты блоков "Стандарт", "Алю", "Классик" соответсвующие точкам в блоке быстрой навигации
            dot = [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5];

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
            //установка контейнеру изображения высоты равной высоте контента для этого блока
            $('.profile .image__container').map(function () {
                $(this).height($(this).next().height());
            });
            //установка контейнеру блока быстрой навигации высоты равной высоте сейкции контента без таблицы
            fixedContainer.height(sectionHeight.height());
            //211 = высота нефиксированного меню + нижний отступ секции__1 + верхний отступ у блока навигации
            positioning(fixedBlock, fixedBlockOffset - 211, bottomFixed, bottomFixedContainer);
            positioning(header__1, header__1__offset, header__1__bottom,
                bottomContainerImageFixedBlock__1 - fixedImageBlock__1.height(), fixedImageBlock__1.height() + 60);
            positioning(header__2, header__2__offset, header__2__bottom,
                bottomContainerImageFixedBlock__2 - fixedImageBlock__2.height(), fixedImageBlock__2.height() + 60);
            positioning(header__3, header__3__offset, header__3__bottom,
                bottomContainerImageFixedBlock__3 - fixedImageBlock__3.height(), fixedImageBlock__3.height() + 60);
            positioning(fixedImageBlock__1, offsetContainerFixedImageBlock__1,
                bottomImageFixedBlock__1, bottomContainerImageFixedBlock__1);
            positioning(fixedImageBlock__2, offsetContainerFixedImageBlock__2,
                bottomImageFixedBlock__2, bottomContainerImageFixedBlock__2);
            positioning(fixedImageBlock__3, offsetContainerFixedImageBlock__3,
                bottomImageFixedBlock__3, bottomContainerImageFixedBlock__3);
        }

        /*
         * Позиционирование фиксируемого блока
         * fixedBlock - фиксируемый блок
         * fixedBlockOffset - смещение фиксируемого блока относительно начала страницы
         * bottomFixedBlock - нижняя граница фиксируемого блока
         * bottomFixedContainer - нижняя граница контейнера фиксируемого блока
         * headerBottom - нижняя граница заголовка, по достижении которой он "прилипает"
         */
        function positioning(fixedBlock, fixedBlockOffset, bottomFixedBlock, bottomFixedContainer, headerBottom) {
            //если текущий скролл меньше верхней границы фиксируемого блока
            if (windowTop < fixedBlockOffset) {
                //позиционируем блок абсолютно
                fixedBlock.removeClass('fixed');
            }
            else {
                //позиционируем блок фиксированно
                fixedBlock.addClass('fixed');
                //если нижняя граница фиксируемого блока больше или равна нижней границе его контейнера
                if (bottomFixedBlock >= bottomFixedContainer) {
                    //устанавливаем блоку абсолютное позициониование и прижимаем к низу контейнера
                    fixedBlock.addClass('bottom');
                    //если блок==заголовок, то устанавливаем высоту прилипания
                    if (fixedBlock[0].nodeName == 'H2') {
                        fixedBlock.css('bottom', headerBottom + 20);
                    }
                    fixedBlock.removeClass('fixed');
                } else {
                    //устанавливаем блоку фиксированное позиционирование
                    fixedBlock.removeClass('bottom');
                    //если блок==заголовок, то удаляем высоту прилипания
                    if (fixedBlock[0].nodeName == 'H2') {
                        fixedBlock.css('bottom', '');
                    }
                }
            }
        }

        //для каждой части высоты блоков "стандарт","алю","классик"
        $(dot).each(function (index, element) {
            //в зависимости от скролла страницы окрашиваем соответствующую точку между кнопками "стандарт" и "алю"
            dotScrolled('profile__1', block__1__Offset, block__1__Height, index, element);
            //между кнопками "алю" и "классик"
            dotScrolled('profile__2', block__2__Offset, block__2__Height, index, element);
            dotScrolled('profile__3', block__3__Offset, block__3__Height, index, element);
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
                imgScrolled(selectorClass, index);
            } else {
                $('.' + selectorClass + '__doted .dot:eq(' + index + ')').removeClass('scrolled');
            }
        }

        /*
         * Смена изображения при скролле
         * selectorClass - класс блока изображений
         * index - индекс изображения
         */
        function imgScrolled(selectorClass, index) {
            $('.' + selectorClass + ' .image__container img').addClass('hidden');
            $('.' + selectorClass + ' .image__container img:eq(' + index + ')').removeClass('hidden');
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
        var target_top = $('.' + this.href.split("#")[1] + '').offset().top - 150;
        //анимация скролла
        $('html, body').animate({scrollTop: target_top}, 'slow');
    });
})(jQuery);
