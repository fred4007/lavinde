/*** before and after**/

function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
    }

    function compareImages(img) {
        var slider, img, clicked = 0,
            w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchend", slideFinish);

        function slideReady(e) {
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*the slider is now clicked and ready to move:*/
            clicked = 1;
            /*execute a function when the slider is moved:*/
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        function slideFinish() {
            /*the slider is no longer clicked:*/
            clicked = 0;
        }

        function slideMove(e) {
            var pos;
            /*if the slider is no longer clicked, exit this function:*/
            if (clicked == 0) return false;
            /*get the cursor's x position:*/
            pos = getCursorPos(e)
            /*prevent the slider from being positioned outside the image:*/
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /*execute a function that will resize the overlay image according to the cursor:*/
            slide(pos);
        }

        function getCursorPos(e) {
            var a, x = 0;
            e = e || window.event;
            /*get the x positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x coordinate, relative to the image:*/
            x = e.pageX - a.left;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            return x;
        }

        function slide(x) {
            /*resize the image:*/
            img.style.width = x + "px";
            /*position the slider:*/
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}

/*Execute a function that will execute an image compare function for each element with the img-comp-overlay class:*/
initComparisons();



function Utils() {}
        Utils.prototype = {
            constructor: Utils,
            isElementInView: function (element, fullyInView) {
                var pageTop = $(window).scrollTop();
                var pageBottom = pageTop + $(window).height();
                var elementTop = $(element).offset().top;
                var elementBottom = elementTop + $(element).height();

                if (fullyInView === true) {
                    return ((pageTop < elementTop) && (pageBottom > elementBottom));
                } else {
                    return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
                }
            }
        };

        var Utils = new Utils();
        $(window).on('load', addFadeIn());

        $(window).scroll(function() {
            addFadeIn(true);
        });

function addFadeIn(repeat) {
            var classToFadeIn = "p, h1, h2, h3, h4, img, .btn";

            $(classToFadeIn).each(function( index ) {
                var isElementInView = Utils.isElementInView($(this), false);
                if (isElementInView) {
                    if(!($(this).hasClass('fade-in')) && !($(this).hasClass('fade-in'))) {
                        if(index % 2 == 0) $(this).addClass('fade-in');
                        else $(this).addClass('fade-in');
                    }
                } else if(repeat) {
                    $(this).removeClass('fade-in');
                }
            });
        }



/****scroll effekt med animationer på fotos og tekst****/
//
//(function($) {
//
//  $.fn.visible = function(partial) {
//
//      var $t            = $(this),
//          $w            = $(window),
//          viewTop       = $w.scrollTop(),
//          viewBottom    = viewTop + $w.height(),
//          _top          = $t.offset().top,
//          _bottom       = _top + $t.height(),
//          compareTop    = partial === true ? _bottom : _top,
//          compareBottom = partial === true ? _top : _bottom;
//
//    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
//
//  };
//
//})(jQuery);
//
//
//
//
//var win = $(window);
//
//var allMods = $("h1, h2, h3, h4, p, img");
//
//
//allMods.each(function(i, el) {
//  var el = $(el);
//  if (el.visible(true)) {
//    el.addClass("already-visible");
//  }
//});
//
//win.scroll(function(event) {
//
//  allMods.each(function(i, el) {
//    var el = $(el);
//    if (el.visible(true)) {
//      el.addClass("fade-in");
//    }
//  });
//
//});

/***menu***/

/**Kollaps menu ved klik**/
//
//$('.nav-link, .nav-bar-brand').click(function() {
//    var navbar_toggle = $('.navbar-toggler');
//    if (navbar_toggle.is(':visible')) {
//        navbar_toggle.trigger('click');
//    }
//});
//

//window.addEventListener('scroll', function() {
//  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
//});


