(function ($) {
    //���� ��������
    var windowBrowser = $(window),
    //���� "��������"
        block__1 = $('.profile__1'),
    //���� "���"
        block__2 = $('.profile__2'),
    //���� "�������"
        block__3 = $('.profile__3'),
    //��������� ����� ������� ���������
        fixedContainer = $('.fixed__container__wrapper'),
    //���� ������� ���������
        fixedBlock = $('.fixed__block'),
    //�������� ����� ��������� ������������ ������ ��������
        fixedBlockOffset = fixedBlock.offset().top,
        header__1 = $('.profile__1 .h2'),
        header__1__offset = header__1.offset().top - 260,
        header__2 = $('.profile__2 .h2'),
        header__2__offset = header__2.offset().top - 110,
        header__3 = $('.profile__3 .h2'),
        header__3__offset = header__3.offset().top;

    //���� ������ ���� ����� 992��
    if (window.innerWidth < 992) {
        //�������������� ������� ��� �������
        $('.main').addClass('swiper-container');
        $('.columns__wrapper').addClass('swiper-wrapper');
        $('.columns__wrapper > div').addClass('swiper-slide');
        $('.swiper__btn').removeClass('hidden');
        new Swiper('.swiper-container', {
            nextButton: $('.specification__table .swiper-button-next'),
            prevButton: $('.specification__table .swiper-button-prev')
        });
        //���������� ������� ��������� ������������� ���� ���������� ����������
        fixedContainer.addClass('mobile');
    }


    //���� ���������� ������ ��������
    windowBrowser.scroll(function () {
        //�������� �������
        var windowTop = $(this).scrollTop(),
            header__1__bottom = windowTop + header__1.height(),
            header__2__bottom = windowTop + header__2.height(),
            header__3__bottom = windowTop + header__3.height(),
        //��������� ��������, � �������� �������� ���� ������� ���������
            sectionHeight = $('.wrapper'),
        //��������� ����� �������������� �����������
            containerFixedImageBlock__1 = $('.profile__1 .image__container'),
        //���� �������������� �����������
            fixedImageBlock__1 = containerFixedImageBlock__1.find('.image__fixed__block'),
        //�������� ����� ����������� ������������ ������ �������� - ������ ���� - ����� �����
            offsetContainerFixedImageBlock__1 = containerFixedImageBlock__1.offset().top - 194,
        //������ ������� ����� �����������
            bottomImageFixedBlock__1 = windowTop + fixedImageBlock__1.height(),
        //������ ������� ���������� ����� �������������� �����������
            bottomContainerImageFixedBlock__1 = containerFixedImageBlock__1.offset().top + containerFixedImageBlock__1.height() - 190,
        //��������� ����� �������������� �����������
            containerFixedImageBlock__2 = $('.profile__2 .image__container'),
        //���� �������������� �����������
            fixedImageBlock__2 = containerFixedImageBlock__2.find('.image__fixed__block'),
        //�������� ����� ����������� ������������ ������ �������� - ������ ���� - ����� �����
            offsetContainerFixedImageBlock__2 = containerFixedImageBlock__2.offset().top - 194,
        //������ ������� ����� �����������
            bottomImageFixedBlock__2 = windowTop + fixedImageBlock__2.height(),
        //������ ������� ���������� ����� �������������� �����������
            bottomContainerImageFixedBlock__2 = containerFixedImageBlock__2.offset().top + containerFixedImageBlock__2.height() - 190,
        //��������� ����� �������������� �����������
            containerFixedImageBlock__3 = $('.profile__3 .image__container'),
        //���� �������������� �����������
            fixedImageBlock__3 = containerFixedImageBlock__3.find('.image__fixed__block'),
        //�������� ����� ����������� ������������ ������ �������� - ������ ���� - ����� �����
            offsetContainerFixedImageBlock__3 = containerFixedImageBlock__3.offset().top - 194,
        //������ ������� ����� �����������
            bottomImageFixedBlock__3 = windowTop + fixedImageBlock__3.height(),
        //������ ������� ���������� ����� �������������� �����������
            bottomContainerImageFixedBlock__3 = containerFixedImageBlock__3.offset().top + containerFixedImageBlock__3.height() - 190,
        //������ ������� ����� ������� ���������
            bottomFixed = windowTop + fixedBlock.height(),
        //������ ������� ���������� ����� ������� ��������� - ������
            bottomFixedContainer = sectionHeight.offset().top + sectionHeight.height() - 60,
        //�������� ����� "��������" ������������ ������ ��������
            block__1__Offset = block__1.offset().top,
        //������ ����� "��������"
            block__1__Height = block__1.height(),
        //�������� ����� "���" ������������ ������ ��������
            block__2__Offset = block__2.offset().top,
        //������ ����� "���"
            block__2__Height = block__2.height(),
        //�������� ����� "�������" ������������ ������ ��������
            block__3__Offset = block__3.offset().top,
        //������ ����� "�������"
            block__3__Height = block__3.height(),
        //����� ������ ������ "��������", "���", "�������" �������������� ������ � ����� ������� ���������
            dot = [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5];

        //���� ������� ���������� - ���������
        if (fixedContainer.hasClass('mobile')) {
            //���� ������ �������� ������ �������� ����� ������� ���������
            if (windowTop > fixedBlockOffset) {
                //���������� ����� ��������� ������������� ������������� ���������������� ������ ����
                fixedContainer.addClass('fixed');
            } else {
                //���������� ����� ��������� ������������� ���������� ���������������� ��� ����
                fixedContainer.removeClass('fixed');
            }
        } else {
            //��������� ���������� ����������� ������ ������ ������ �������� ��� ����� �����
            $('.profile .image__container').map(function () {
                $(this).height($(this).next().height());
            });
            //��������� ���������� ����� ������� ��������� ������ ������ ������ ������� �������� ��� �������
            fixedContainer.height(sectionHeight.height());
            //211 = ������ ���������������� ���� + ������ ������ ������__1 + ������� ������ � ����� ���������
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
         * ���������������� ������������ �����
         * fixedBlock - ����������� ����
         * fixedBlockOffset - �������� ������������ ����� ������������ ������ ��������
         * bottomFixedBlock - ������ ������� ������������ �����
         * bottomFixedContainer - ������ ������� ���������� ������������ �����
         * headerBottom - ������ ������� ���������, �� ���������� ������� �� "���������"
         */
        function positioning(fixedBlock, fixedBlockOffset, bottomFixedBlock, bottomFixedContainer, headerBottom) {
            //���� ������� ������ ������ ������� ������� ������������ �����
            if (windowTop < fixedBlockOffset) {
                //������������� ���� ���������
                fixedBlock.removeClass('fixed');
            }
            else {
                //������������� ���� ������������
                fixedBlock.addClass('fixed');
                //���� ������ ������� ������������ ����� ������ ��� ����� ������ ������� ��� ����������
                if (bottomFixedBlock >= bottomFixedContainer) {
                    //������������� ����� ���������� ��������������� � ��������� � ���� ����������
                    fixedBlock.addClass('bottom');
                    //���� ����==���������, �� ������������� ������ ����������
                    if (fixedBlock[0].nodeName == 'H2') {
                        fixedBlock.css('bottom', headerBottom + 20);
                    }
                    fixedBlock.removeClass('fixed');
                } else {
                    //������������� ����� ������������� ����������������
                    fixedBlock.removeClass('bottom');
                    //���� ����==���������, �� ������� ������ ����������
                    if (fixedBlock[0].nodeName == 'H2') {
                        fixedBlock.css('bottom', '');
                    }
                }
            }
        }

        //��� ������ ����� ������ ������ "��������","���","�������"
        $(dot).each(function (index, element) {
            //� ����������� �� ������� �������� ���������� ��������������� ����� ����� �������� "��������" � "���"
            dotScrolled('profile__1', block__1__Offset, block__1__Height, index, element);
            //����� �������� "���" � "�������"
            dotScrolled('profile__2', block__2__Offset, block__2__Height, index, element);
            dotScrolled('profile__3', block__3__Offset, block__3__Height, index, element);
        });

        /*
         * ����������� ������ �����
         * selectorClass - ����� ����� �����
         * blockOffset - �������� �������������� �����
         * blockHeight - ������ �������������� �����
         * index - ������ �����
         * ratio - ����� ������ ����� ��������������� �����
         */
        function dotScrolled(selectorClass, blockOffset, blockHeight, index, ratio) {
            //���� ������� ������ ������ ����� �������� � ����� ������ �������������� ����� �� ������� ��������
            // ������ ����
            if (windowTop > (blockOffset + blockHeight * ratio - windowBrowser.height() / 2)) {
                $('.' + selectorClass + '__doted .dot:eq(' + index + ')').addClass('scrolled');
                imgScrolled(selectorClass, index);
            } else {
                $('.' + selectorClass + '__doted .dot:eq(' + index + ')').removeClass('scrolled');
            }
        }

        /*
         * ����� ����������� ��� �������
         * selectorClass - ����� ����� �����������
         * index - ������ �����������
         */
        function imgScrolled(selectorClass, index) {
            $('.' + selectorClass + ' .image__container img').addClass('hidden');
            $('.' + selectorClass + ' .image__container img:eq(' + index + ')').removeClass('hidden');
        }

        //���� ������� ������ ������ �������� ����� "�������" �� ������� �������� ������ ����
        if (windowTop > block__3.offset().top - windowBrowser.height() / 2) {
            //� ������� �������� ������ ������� ��������� ������� ������
            $('.current[class != hidden]').addClass('hidden');
            //������ ������ ���������� �� ������ "�������"
            $('.profile__3__current').removeClass('hidden');
        } else {
            //���� ������� ������ ������ �������� ����� "���" �� ������� �������� ������ ����
            if (windowTop > block__2.offset().top - windowBrowser.height() / 2) {
                $('.current[class != hidden]').addClass('hidden');
                //������ ������ ���������� �� ������ "���"
                $('.profile__2__current').removeClass('hidden');
            } else {
                $('.current[class != hidden]').addClass('hidden');
                //������ ������ ���������� �� ������ "��������"
                $('.profile__1__current').removeClass('hidden');
            }
        }
    });

    //����� ��� ����� �� ������ ������� ��������� � ���������������� �����
    fixedBlock.children('a').on('click', function () {
        event.preventDefault();
        //�������� ����� � ������ ������������ ������ �������� - ������ ���� � �������
        var target_top = $('.' + this.href.split("#")[1] + '').offset().top - 150;
        //�������� �������
        $('html, body').animate({scrollTop: target_top}, 'slow');
    });
})(jQuery);
