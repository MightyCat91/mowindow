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
        fixedBlockOffset = fixedBlock.offset().top;

    $('.fancy').fancybox();
    fixedContainer.height($('.section__2').height());

    //���� ������ ���� ����� 992��
    if (windowBrowser.width() < 992) {
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
        //������ ������� ����� ������� ���������
            bottomFixed = windowTop + fixedBlock.height(),
        //������ ������� ���������� ����� ������� ��������� - ������
            bottomFixedContainer = fixedContainer.offset().top + fixedContainer.height() - 60,
        //�������� ����� "��������" ������������ ������ ��������
            block__1__Offset = block__1.offset().top,
        //������ ����� "��������"
            block__1__Height = block__1.height(),
        //�������� ����� "���" ������������ ������ ��������
            block__2__Offset = block__2.offset().top,
        //������ ����� "���"
            block__2__Height = block__2.height(),
        //����� ������ ������ "��������", "���", "�������" �������������� ������ � ����� ������� ���������
            dot = [1/5, 2/5, 3/5, 4/5, 1];

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
            console.log(bottomFixed,fixedBlockOffset, bottomFixedContainer);
            //���� ������ �������� ������ ������ ���� + ������ ������� ������� � ������ + 1��(��� ��������� �������)
            if (windowTop < 430) {
                fixedBlock.removeClass('fixed');
            }
            else {
                fixedBlock.addClass('fixed');
                //���� ������ ������� ����� ��������� ������ ��� ����� ������ ������� ���������� ����� ���������
                if (bottomFixed >= bottomFixedContainer) {
                    //������������� ����� ��������� ���������� ��������������� � ��������� � ���� ����������
                    fixedBlock.addClass('bottom');
                    fixedBlock.removeClass('fixed');
                } else {
                    //������������� ����� ��������� ������������� ����������������
                    fixedBlock.removeClass('bottom');
                }
            }
        }

        //��� ������ ����� ������ ������ "�����","�����������","���"
        $(dot).each(function (index, element) {
            //� ����������� �� ������� �������� ���������� ��������������� ����� ����� �������� "�����" � "�����������"
            dotScrolled('profile__1', block__1__Offset, block__1__Height, index, element);
            //����� �������� "�����������" � "���"
            dotScrolled('profile__2', block__2__Offset, block__2__Height, index, element);
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
            } else {
                $('.' + selectorClass + '__doted .dot:eq(' + index + ')').removeClass('scrolled');
            }
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
        var target_top= $('.'+this.href.split("#")[1]+'').offset().top - 150;
        //�������� �������
        $('html, body').animate({scrollTop:target_top}, 'slow');
    });
})(jQuery);
