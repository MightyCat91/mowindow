(function ($) {
    // селектор палитры краски
    var rimmelColor = $('.rimmel__color');
    // селектор палитры цветов ручек
    var handleColor = $('.handle__color');

    $('.fancy').fancybox();

    // показ уголка соответствующего выбранному цвету
    rimmelColor.on('click', function () {
        var pushedColorId = $(this).children('img').data('id'),
            currentColorId = rimmelColor.filter('.active').children().data('id');
        if (pushedColorId != currentColorId) {
            $('.rimmel__corner__img img[data-id="' + pushedColorId + '"]').removeClass('hidden');
            $('.rimmel__corner__img img[data-id="' + currentColorId + '"]').addClass('hidden');
        }
        rimmelColor.removeClass('active');
        $(this).addClass('active');
    });

    // показ ручки соответствующей выбранному цвету
    handleColor.on('click', function () {
        var pushedColorId = $(this).children('img').data('id'),
            currentColorId = handleColor.filter('.active').children().data('id');
        if (pushedColorId != currentColorId) {
            $('.window__container img[data-id="' + pushedColorId + '"]').removeClass('hidden');
            $('.window__container img[data-id="' + currentColorId + '"]').addClass('hidden');
        }
        handleColor.removeClass('active');
        $(this).addClass('active');
    });

    //$(window).on('load', function () {
    //var canvas = $('.pencils__img')[0].getContext('2d');
    //var img = $('.canvas__img')[0];
    //canvas.canvas.width = img.width;
    //canvas.canvas.height = img.height;
    //canvas.drawImage(img, 0, 0);
    var canvas = $('.pencils__img')[0],
        image = new Image();

    image.crossOrigin = "Anonymous";
    image.onload = function () {
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.getContext('2d').drawImage(this, 0, 0);
        canvas.toDataURL();
        $('.canvas__img').on('click', function (e) {
            var pixelData = canvas.getContext('2d').getImageData(543, 324, 1, 1).data;
            var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
            console.log(hex);
            console.log(pixelData);
        });
    };
    image.src = $('.canvas__img').prop('src');
    //});

    //var canvas = $('.pencils__img')[0];
    //paper.setup(canvas);
    //var raster = new paper.Raster();
    //raster.source = $('.canvas__img').prop('src');
    //raster.visible = false;


    //$('.canvas__img').mousemove(function (e) {
    //var canvas = document.createElement( 'canvas'),
    //    image = new Image();
    //image.src = $('.canvas__img').prop('src');
    //image.crossOrigin = "Anonymous";
    //image.onload = function() {
    //    canvas.width = this.width;
    //    canvas.height = this.height;
    //    canvas.getContext('2d').drawImage(this, 0, 0);
    //    canvas.toDataURL();
    //    var pixelData = canvas.getContext('2d').getImageData(e.pageX, e.pageY, 1, 1).data;
    //    var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
    //    console.log(hex);
    //    console.log(pixelData);
    //};

    //var canvas = $('.pencils__img')[0];
    //    image = new Image();
    //
    //image.crossOrigin = "Anonymous";
    //image.onload = function() {
    //    canvas.width = this.width;
    //    canvas.height = this.height;
    //    canvas.getContext('2d').drawImage(this, 0, 0);
    //    canvas.toDataURL();
    //    var pixelData = canvas.getContext('2d').getImageData(e.pageX, e.pageY, 1, 1).data;
    //    var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
    //    console.log(hex);
    //    console.log(pixelData);
    //};
    //image.src = $('.canvas__img').prop('src');

    //var pixelData = canvas.getContext('2d').getImageData(e.pageX, e.pageY, 1, 1).data;
    //    var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
    //    console.log(hex);
    //    console.log(pixelData);

    //var color = raster.getPixel(e.pageX, e.pageY);
    //console.log(e.pageX, e.pageY);
    //console.log(color);
    //});

    function rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }
})(jQuery);