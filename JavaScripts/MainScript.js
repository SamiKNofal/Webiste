function sliderLayout() {

    try {
        var Slide = $('.MainSliderMaterials'),
            Count = Slide.length, Dark = '#fff',
            Light = '#000';
        for (var i = 0; i < Count; i++) {
            getElement = Slide.eq(i);
            getAttr = getElement.attr('layout');
            if (getAttr == 'light') {
                getElement.find('.MainSliderParag').addClass('SliderDarkParg');
                getElement.find('.MainSliderHref').addClass('SliderDarkLink');
            }
            else if (getAttr == 'dark') {
                getElement.find('.MainSliderParag').addClass('SliderLightParg');
                getElement.find('.MainSliderHref').addClass('SliderLightLink');
            }
        }
    }

    catch (e) {
        // Insert catch code here to handle exception if neccessary.
    }

}

function initSliders() {

    try {
        var MainSlider = $('#MainSlider');
        MainSlider.slick({
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            fade: false,
            autoplaySpeed: 6000,
            pauseOnHover: true,
        });

        var GallerySlider = $('#GallerySlider');
        GallerySlider.slick({
            centerMode: true,
            slidesToShow: 3,
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 6000,
            responsive: [
                {
                    breakpoint: 1080,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    catch (e) {
        // Insert catch code here to handle exception if neccessary.
    }

}

function sideMenu() {

    try {
        var MenuFlag = false;
        Body = $('#Body'),
            SideMenu = $('#SideMenu'),
            WebContent = $('#WebContent'),
            Header = $('#Header'),
            HeaderMenuIcon = $('#HeaderMenuIcon'),
            HeaderIconBarLarge = $('.HeaderIconBar').eq(0),
            HeaderIconBarSmall = $('.HeaderIconBar').eq(1);

        HeaderMenuIcon.click(function () {
            if (MenuFlag) {
                MenuFlag = !MenuFlag;
                Body.removeClass('ScrollOverflow');
                SideMenu.removeClass('SideMenuActive');
                //WebContent.css('border-top', '0px solid #000');
                Header.removeClass('ActiveMenu');
                HeaderMenuIcon.find('.HeaderIcon').removeClass('is-active');
                HeaderMenuIcon.removeClass('HeaderMenuIconBgActive');
                HeaderIconBarLarge.removeClass('HeaderIconBarAct1');
                HeaderIconBarSmall.removeClass('HeaderIconBarAct2');
            }
            else {
                MenuFlag = !MenuFlag;
                Body.addClass('ScrollOverflow');
                SideMenu.addClass('SideMenuActive');
                //WebContent.css('border-top', Header.outerHeight() + 'solid #000');
                Header.addClass('ActiveMenu');
                HeaderMenuIcon.find('.HeaderIcon').addClass('is-active');
                HeaderMenuIcon.addClass('HeaderMenuIconBgActive');
                HeaderIconBarLarge.addClass('HeaderIconBarAct1');
                HeaderIconBarSmall.addClass('HeaderIconBarAct2');
            }
        });
    }

    catch (e) {
        // Insert catch code here to handle exception if neccessary.
    }

}

function getCurrentTime() {

    try {
        var timeFlag = true,
            CurrentTime = $('.CurrentTime');

        function formatAMPM(date, flag) {
            var hours = date.getHours(),
                minutes = date.getMinutes(),
                ampm = hours >= 12 ? 'PM' : 'AM', strTime;
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            if (flag)
                strTime = hours + ':' + minutes + ' ' + ampm;
            else
                strTime = hours + ' ' + minutes + ' ' + ampm;
            return strTime;
        }

        window.setInterval(function () {
            CurrentTime.find('span').html(formatAMPM(new Date, timeFlag));
            timeFlag = !timeFlag;
        }, 500);
    }

    catch (e) {
        // Insert catch code here to handle exception if neccessary.
    }

}

function headerScroll() {
    try {
        var TopHeader = $('#TopHeader'),
            height = TopHeader.height(),
            initY = TopHeader.offset().top,
            endY = initY + height;
            Header = $('#Header'),

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > endY) {
                Header.addClass('HeaderActive');
            }
            else {
                Header.removeClass('HeaderActive');
            }
        });
    }

    catch (e) {
        // Insert catch code here to handle exception if neccessary.
    }
}

function scrollTop() {
    try {
        var ScrollTop = $('#ScrollTop');
        window.onscroll = function (ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight
                || $(window).scrollTop() >= 2000) {
                ScrollTop.fadeIn(200);
            }
            else {
                ScrollTop.fadeOut(200);
            }
        };
        ScrollTop.each(function () {
            $(this).click(function () {
                $('html,body').animate({ scrollTop: 0 }, 500);
                return false;
            });
        });
    }

    catch (e) {
        // Insert catch code here to handle exception if neccessary.
    }
}

function containerParallax(Alpha) {

    try {
        var initY = Alpha.offset().top,
            height = Alpha.height(),
            endY = initY + Alpha.height();

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > initY && scroll < endY) {
                var diff = scroll - initY;
                var ratio = Math.round((diff / height) * 100);
                Alpha.css('background-position-y', (ratio / 10)+25 + "%");
                Alpha.find('div').css('background', 'rgba(0,0,0,' + (ratio*1.3) / 100 + ')');
            }
        });
    }

    catch (e) {
        // Insert catch code here to handle exception if neccessary.
    }

}

function itemParallax(Alpha) {

    try {
        Alpha.mousemove(function (event) {
            var PosX, PosY, getHeight = $(this).height(),
                getWidth = $(this).width(), CSS, boxShadow,
                offset = $(this).offset(),
                xCord = event.pageX, yCord = event.pageY,
                xPercent = Math.floor((xCord - offset.left) / getWidth * 10000) / 100,
                yPercent = Math.floor((yCord - offset.top) / getHeight * 10000) / 100;

            if (xPercent < 50) PosX = Math.floor(-(100 - (xPercent * 2)));
            else if (xPercent > 50) PosX = Math.floor((xPercent - 50) * 2);
            else PosX = 0;

            if (yPercent < 50) PosY = Math.floor(100 - (yPercent * 2));
            else if (yPercent > 50) PosY = Math.floor(-((yPercent - 50) * 2));
            else PosY = 0;

            CSS = 'rotateX(' + PosY / 10 + 'deg)' + ' rotateY(' + PosX / 10 + 'deg)';
            boxShadow = -PosX / 10 + 'px ' + PosY / 10 + 'px 10px 0px rgb(170, 170, 170)'; 
            // Rotate X takes position Y and Rotate Y takes position X
            $(this).css({
                'transform': CSS, '-o-transform': CSS,
                '-ms-transform': CSS, '-moz-transform': CSS,
                '-webkit-transform': CSS, 'box-shadow': boxShadow
            });
        });
        Alpha.mouseout(function () {
            CSS = 'rotateX(0deg) rotateY(0deg)';
            boxShadow = '0px 0px 10px 0px rgb(170, 170, 170)';
            $(this).css({
                'transform': CSS, '-o-transform': CSS,
                '-ms-transform': CSS, '-moz-transform': CSS,
                '-webkit-transform': CSS, 'box-shadow': boxShadow
            });
        });
    }

    catch (e) {
        // Insert catch code here to handle exception if neccessary.
    }

}

function copyClipboard(containerid) {

    try {
        if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(containerid));
            range.select().createTextRange();
            document.execCommand("copy");

        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(document.getElementById(containerid));
            window.getSelection().addRange(range);
            document.execCommand("copy");
        }
    }

    catch (e) {
        // Insert catch code here to handle exception if neccessary.
    }

}

function codeNavigation() {

    try {
        var HiddenField = $('#HiddenTxtField'),
            SelectCode = $('.SelectCode'), 
            CopyCode = $('.CopyCode'),
            ZoomInCode = $('.ZoomInCode'),
            ZoomOutCode = $('.ZoomOutCode'),
            ZoomDefCode = $('.ZoomDefCode'),
            MaxZoom = 30, MinZoom = 8, DefZoom = 13;	

        SelectCode.click(function () {
            var getParent = $(this).closest('.SSCHolder');
            getCodeTxt = getParent.find('.CodeTxt');
            getCodeTxt.select();
        });

        CopyCode.click(function () {
            var getParent = $(this).closest('.SSCHolder');
            getCodeTxt = getParent.find('.CodeTxt');
            HiddenField.html(getCodeTxt.html());
            CopyToClipboard('HiddenTxtField');
        });

        ZoomInCode.click(function () {
            var getParent = $(this).closest('.SSCHolder'),
                getFontSize = getParent.find('.CodeTxt').css('font-size').replace('px', '');
            getFontSize = parseInt(getFontSize);
            if (getFontSize < MaxZoom) {
                if (getFontSize >= MinZoom) {
                    var getZoomChild = getParent.find('.ZoomOutCode');
                    getZoomChild.css({ 'opacity': '1', 'filter': 'alpha(opacity=100)', 'cursor': 'pointer' });
                }
                getParent.find('.CodeTxt').css('font-size', getFontSize + 1 + 'px');
                $(this).css({ 'opacity': '1', 'filter': 'alpha(opacity=100)', 'cursor': 'pointer' });
            }
            else $(this).css({ 'opacity': '0.25', 'filter': 'alpha(opacity=25)', 'cursor': 'auto' });
        });

        ZoomOutCode.click(function () {
            var getParent = $(this).closest('.SSCHolder'),
                getFontSize = getParent.find('.CodeTxt').css('font-size').replace('px', '');
            getFontSize = parseInt(getFontSize);
            if (getFontSize > MinZoom) {
                if (getFontSize <= MaxZoom) {
                    var getZoomChild = getParent.find('.ZoomInCode');
                    getZoomChild.css({ 'opacity': '1', 'filter': 'alpha(opacity=100)', 'cursor': 'pointer' });
                }
                getParent.find('.CodeTxt').css('font-size', getFontSize - 1 + 'px');
                $(this).css({ 'opacity': '1', 'filter': 'alpha(opacity=100)', 'cursor': 'pointer' });
            }
            else $(this).css({ 'opacity': '0.25', 'filter': 'alpha(opacity=25)', 'cursor': 'auto' });
        });

        ZoomDefCode.click(function () {
            var getParent = $(this).closest('.SSCHolder'),
                getZoomIn = getParent.find('.ZoomInCode'),
                getZoomOut = getParent.find('.ZoomOutCode');
            getParent.find('.CodeTxt').css('font-size', DefZoom + 'px');
            getZoomIn.css({ 'opacity': '1', 'filter': 'alpha(opacity=100)', 'cursor': 'pointer' });
            getZoomOut.css({ 'opacity': '1', 'filter': 'alpha(opacity=100)', 'cursor': 'pointer' });
        });
    }

    catch (e) {
        // Insert catch code here to handle exception if neccessary.
    }

}

function videoPreview(Alpha) {

    try {
        Alpha[0].autoplay = true;
        Alpha[0].loop = true;
        $('body').on('click touchstart', function () {
            if (Alpha[0].paused) {
                // video is not playing
                // so play video now
                Alpha[0].play();
            }
        });
    }

    catch (e) {
        // Insert catch code here to handle exception if neccessary.
    }

}

$(document).ready(function() {

    try {
        sideMenu();
        sliderLayout();
        initSliders();
        getCurrentTime();
		headerScroll();
        scrollTop();
        videoPreview($('.Video'));
        containerParallax($('.WebBanner'));
        itemParallax($('.BoxLink'));
        itemParallax($('.ItemsAreaMaterial'));
        codeNavigation();
	}
	
    catch(e){
	console.log(e);
    }

});
