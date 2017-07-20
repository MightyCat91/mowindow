(function ($) {
    //окно браузера
    var windowBrowser = $(window),
        //блок "сосна"
        sosnaBlock = $('.sosna'),
        //блок "лиственница"
        listvenniczaBlock = $('.listvennicza'),
        //блок "дуб"
        dubBlock = $('.dub'),
        //контейнер блока быстрой навигации
        fixedContainer = $('.fixed__container__wrapper'),
        //блок быстрой навигации
        fixedBlock = $('.fixed__block'),
        //смещение блока навигации относительно начала страницы
        fixedBlockOffset = fixedBlock.offset().top;

    //если ширина окна менее 992рх
    if (windowBrowser.width() < 992) {
        //инициализируем слайдер для таблицы
        $('.main').addClass('swiper-container');
        $('.columns__wrapper').addClass('swiper-wrapper');
        $('.breed').addClass('swiper-slide');
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
            //нижняя граница блока быстрой навигации
            bottomFixed = windowTop + fixedBlockOffset + fixedBlock.height(),
            //нижняя граница контейнера блока быстрой навигации
            bottomFixedContainer = fixedBlockOffset + fixedContainer.height() - 88,
            //смещение блока "сосна" относительно начала страницы
            sosnaBlockOffset = sosnaBlock.offset().top,
            //высота блока "сосна"
            sosnaBlockHeight = sosnaBlock.height(),
            //смещение блока "сосна" относительно начала страницы
            listvenniczaBlockOffset = listvenniczaBlock.offset().top,
            //высота блока "лиственница"
            listvenniczaBlockHeight = listvenniczaBlock.height(),
            //части высоты блоков "сосна", "лиственница", "дуб" соответсвующие точкам в блоке быстрой навигации
            dot = [1/5, 2/5, 3/5, 4/5, 1];

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
            //если скролл страницы меньше высоты меню + 1рх(для отсутсвия скачков)
            if (windowTop < 151) {
                //у блока навигиции убираем отступ в высоту мобильного меню
                fixedBlock.removeClass('with__sticky__menu');
            }
            else {
                //блоку навигации устанавливаем отступ в высоту мобильного меню
                fixedBlock.addClass('with__sticky__menu');
                //если нижняя граница блока навигации больше или равна нижней границе контейнера блока навигации
                if (bottomFixed >= bottomFixedContainer) {
                    //устанавливаем блоку навигации абсолютное позициониование и прижимаем к низу контейнера
                    fixedBlock.addClass('bottom');
                    //у блока навигиции убираем отступ в высоту мобильного меню
                    fixedBlock.removeClass('with__sticky__menu');
                } else {
                    //устанавливаем блоку навигации фиксированное позиционирование
                    fixedBlock.removeClass('bottom');
                    //блоку навигиции добавляем отступ в высоту мобильного меню
                    fixedBlock.addClass('with__sticky__menu');
                }
            }
        }

        //для каждой части высоты блоков "сосна","лиственница","дуб"
        $(dot).each(function (index, element) {
            //в зависимости от скролла страницы окрашиваем соответствующую точку между кнопками "сосна" и "лиственница"
            dotScrolled('sosna', sosnaBlockOffset, sosnaBlockHeight, index, element);
            //между кнопками "лиственница" и "дуб"
            dotScrolled('listvennicza', listvenniczaBlockOffset, listvenniczaBlockHeight, index, element);
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
            } else {
                $('.' + selectorClass + '__doted .dot:eq(' + index + ')').removeClass('scrolled');
            }
        }

        //если текущий скролл больше смещения блока "дуб" за вычетом половины высоты окна
        if (windowTop > dubBlock.offset().top - windowBrowser.height() / 2) {
            //у текущей активной кнопки быстрой навигации убираем иконку
            $('.current[class != hidden]').addClass('hidden');
            //вешаем иконку активности на кнопку "дуб"
            $('.dub__current').removeClass('hidden');
        } else {
            //если текущий скролл больше смещения блока "лиственница" за вычетом половины высоты окна
            if (windowTop > listvenniczaBlock.offset().top - windowBrowser.height() / 2) {
                $('.current[class != hidden]').addClass('hidden');
                //вешаем иконку активности на кнопку "лиственница"
                $('.listvennicza__current').removeClass('hidden');
            } else {
                $('.current[class != hidden]').addClass('hidden');
                //вешаем иконку активности на кнопку "сосна"
                $('.sosna__current').removeClass('hidden');
            }
        }
    });

    //скрол при клике по кнопке быстрой навигации к соответствующему якорю
    fixedBlock.children('a').on('click', function () {
        event.preventDefault();
        //смещение блока с якорем относительно начала страницы - высоты меню с запасом
        var target_top= $('.'+this.href.split("#")[1]+'').offset().top - 120;
        //анимация скролла
        $('html, body').animate({scrollTop:target_top}, 'slow');
    });
})(jQuery);
