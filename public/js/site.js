jQuery(function ($) {
    "use strict";
    var animEndEventNames = {
        'WebkitAnimation': 'webkitAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd',
        'animation': 'animationend'
    }, animEndEventName = animEndEventNames[Modernizr.prefixed('animation')], isMobile = navigator.userAgent.match(/(iPhone|iPod|Android|BlackBerry|iPad|IEMobile|Opera Mini)/i), isIE9 = navigator.userAgent.match('MSIE 9.0'), support = Modernizr.cssanimations;

    var Site = {

        initialized: false,

        styles: [{
            "featureType": "landscape",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 65
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 51
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "saturation": -100
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 30
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 40
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "saturation": -100
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative.province",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": -25
            }, {
                "saturation": -100
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#ffff00"
            }, {
                "lightness": -25
            }, {
                "saturation": -97
            }]
        }],

        initialize: function () {

            if (this.initialized)
                return;
            this.initialized = true;

            this.build();
            this.events();
            if ($('#header').length) {
                this.headerStyle();
            }
            if ($('.gallery-grid').length) {
                this.masonry();
            }

        },

        build: function () {

            //equalizer
            if ($('.equalizer').length) {

                var $equalizer = $('.equalizer'), equalizing, equalizer = new Array()

                equalizing = function ($this, eqHeight) {
                    if ($(window).width() >= 768) {
                        $this.children().height(eqHeight);
                    } else {
                        $this.children().css('height', 'auto');
                    }
                }
                var insideEqui = function () {
                    for (var i = 0; i < $equalizer.length; i++) {
                        equalizer[i] = $equalizer.eq(i)
                        var eqHeight = equalizer[i].height();
                        equalizing(equalizer[i], eqHeight);
                    }
                }
                insideEqui();

                $(window).resize(function () {
                    for (var i = 0; i < $equalizer.length; i++) {
                        equalizer[i] = $equalizer.eq(i)
                        equalizer[i].children().css('height', 'auto');
                        insideEqui();
                    }

                })
            }
            //macbook slider
            if ($('#mackbook-slider').length) {
                $('#mackbook-slider').flexslider({
                    animation: "slide",
                    controlNav: true,
                    directionNav: true,
                    init: function () {
                        var $iconList = $('.icon-box >li');
                        $iconList.find('a').on('click touchend', function (e) {
                            e.preventDefault();
                            $iconList.find('a').removeClass('active');
                            $(this).addClass('active');
                            var ind = $(this).parent('li').index();
                            $('#mackbook-slider .flex-control-paging').find('li').eq(ind).find('a').trigger('click');
                        })
                        $('.preview-block .badge-theme').click(function (e) {
                            e.preventDefault();
                            $('.preview-block .badge-theme').css('z-index', '10');
                            if ($(this).hasClass('next-slide')) {
                                $('#mackbook-slider .flex-next ').trigger('click');
                                $(this).css('z-index', '100');
                            } else if ($(this).hasClass('prev-slide')) {
                                $('#mackbook-slider .flex-prev ').trigger('click');
                                $(this).css('z-index', '100');
                            }
                        })
                        setInterval(function () {
                            var ind = $('#mackbook-slider .flex-control-paging .flex-active').parent('li').index();
                            $iconList.find('a').removeClass('active');
                            $iconList.eq(ind).find('a').addClass('active');
                        }, 10)
                    }
                });
            }
            //triangular boxes
            var triLayout = function () {
                $('.l-down, .l-down-up').css({
                    'border-left-width': parseInt($('#wrapper').width())
                })
                if ($('.device-frame, .flip-frame, .box-frame').length) {
                    $('.device-frame, .flip-frame, .box-frame').addClass('animate');
                    $('.ipad-loader').fadeOut(600);
                }
                if ($('.iphone-wrap').length) {
                    $('.iphone-wrap .iphone-frame:first-child').addClass('animate');
                    setTimeout(function () {
                        $('.iphone-wrap .iphone-frame.large').addClass('animate');
                    }, 200)
                    $('.ipad-loader').fadeOut(600);
                }
            }
            if ($('.l-down').length) {
                $(window).load(function () {
                    triLayout()
                })
                $(window).resize(function () {
                    triLayout()
                })
                $(document).on('click', '#layout .layout-column', function () {
                    setInterval(function () {
                        triLayout()
                    }, 400)
                })
            }

            if ($('.intro-section figure .mobile-preview-first').length) {
                $('.intro-section figure .mobile-preview-first').addClass('animate');
                setTimeout(function () {
                    $('.intro-section figure .mobile-preview-sec').addClass('animate');
                }, 200)
                $('.ipad-loader').fadeOut(600);
            }
            if ($('.iphone-frame-left').length) {
                $('.iphone-frame-right').addClass('animate');
                setTimeout(function () {
                    $('.iphone-frame-left').addClass('animate');
                }, 200)
                $('.ipad-loader').fadeOut(600);
            }
            if ($('.ipad-frame-wrap').length) {
                setTimeout(function () {
                    $('.ipad-frame-large').addClass('animate');
                    setTimeout(function () {
                        $('.ipad-frame-wrap .iphone-frame').addClass('animate');
                    }, 500)
                    $('.ipad-loader').fadeOut(600);
                }, 1000)
            }

            // social icon
            if ($('.sec-social').length) {

                if (isMobile) {
                    $('.sec-social').on('touchend', function (e) {
                        e.stopPropagation()
                        $(this).find('.social-icons').addClass('animate')
                    });
                    $(document).on('touchend', function () {
                        $('.sec-social').find('.social-icons').removeClass('animate')
                    });
                } else {
                    $('.sec-social').hover(function () {
                        $(this).find('.social-icons').addClass('animate')
                    }, function () {
                        $(this).find('.social-icons').removeClass('animate')
                    });
                }
            }
        },

        //validation: function () {
        //    $('form').validate();
        //},

        events: function () {

            //animated section
            if ($('.animated-section').length) {
                var $animSections = $('.animated-section');
                var animatedSection = new Array()
                for (var i = 0; i < $animSections.length; i++) {
                    animatedSection[i] = $animSections.eq(i)
                }
            }
            var animSection = function () {
                for (var i = 0; i < $animSections.length; i++) {
                    if ($(window).scrollTop() > animatedSection[i].offset().top - $(window).height() * .7) {
                        animatedSection[i].addClass('animate')
                    }
                }

            }
            //bg parallax
            if ($('.parallax').length) {
                var $parallax = $('.parallax');
                var parallaxArray = new Array();
                for (var i = 0; i < $parallax.length; i++) {
                    parallaxArray[i] = $parallax.eq(i)
                }

            }

            var parallax = function (id, val) {
                if ($(window).scrollTop() > id.offset().top - $(window).height() && $(window).scrollTop() < id.offset().top + id.outerHeight()) {
                    var px = parseInt($(window).scrollTop() - (id.offset().top - $(window).height()))
                    px *= -val;
                    id.css({
                        'background-position': 'center ' + px + 'px'
                    })
                }
            }
            // navigation link hightlight on scroll

            var navHighlight = function () {
                var i = 0, j = 0, ids = [], offsetId = [], hHeight = $('#header.horz').outerHeight(), scrollTop = $(window).scrollTop(), $navbarLinks = $('.navbar-nav >li'), navLength = $navbarLinks.length;
                $navbarLinks.each(function () {
                    if (!$(this).find('a').attr('data-link')) {

                        if ($($(this).find('a').attr('href')).offset() != undefined) {
                            ids[i] = $(this).find('a').attr('href');
                            offsetId[i] = $(ids[i]).offset().top - hHeight
                            i++;
                        }

                    } else {
                        ids[i] = $(this).find('a').attr('data-link');
                        if ($(ids[i]).offset() != undefined) {
                            offsetId[i] = $(ids[i]).offset().top - hHeight
                            i++;
                        }
                    }


                })
                //nav active
                $navbarLinks.removeClass('active');
                navLength = offsetId.length;
                for (j = 0; j < navLength; j++) {
                    if (j < navLength - 1) {
                        if (scrollTop >= offsetId[j] && scrollTop < offsetId[j + 1]) {
                            $('.navbar-nav >li> a[data-link="' + ids[j] + '"]').parent('li').addClass('active');
                            $('.navbar-nav >li> a[href="' + ids[j] + '"]').parent('li').addClass('active');
                        }
                    } else {
                        if (scrollTop >= offsetId[navLength - 1]) {
                            $('.navbar-nav >li> a[data-link="' + ids[navLength - 1] + '"]').parent('li').addClass('active');
                            $('.navbar-nav >li> a[href="' + ids[navLength - 1] + '"]').parent('li').addClass('active');
                        }
                    }
                }
            }
            if ($(window).width() >= 992 && $('#header').length && $('#header').hasClass('horz')) {
                if ($('#header.horz').length) {
                    navHighlight();
                }
                $(window).scroll(function () {
                    if ($('#header.horz').length) {
                        navHighlight();
                    }
                })
            }

            //goto to sections on navigation link
            var scrollTo = function (id) {
                if ($(id).offset() != undefined) {
                    var top = $(id).offset().top
                    $('html, body').animate({
                        scrollTop: parseInt(top - 100)
                    }, 700)
                }
            }
            // goto next section
            if ($('#homepage').length) {
                if ($('#header').hasClass('horz')) {
                    $('#header .navbar-nav a').click(function (e) {
                        e.preventDefault()
                        var id = $(this).attr('href');
                        scrollTo(id);
                    })
                } else {
                    $('#header .navbar-nav a').click(function (e) {
                        e.preventDefault()
                        var id = $(this).attr('href');
                        scrollTo(id);
                        $('#header .navbar-toggle').trigger('click')
                    })
                }
            }

            //blog-section
            var fixedBlog = function () {
                var $mainBlog = $('#main-blog'), $headerNav = $('#header .navbar-header'), $blogSec = $('.blog-section');
                if ($(window).scrollTop() >= $mainBlog.offset().top - $headerNav.outerHeight() && $(window).scrollTop() < $('.wrap-blog-post').offset().top) {
                    $blogSec.addClass('fixed').css({
                        top: $headerNav.outerHeight()
                    })
                    $mainBlog.css({
                        paddingTop: $blogSec.outerHeight()
                    })
                } else {
                    $blogSec.removeClass('fixed').css({
                        top: 0
                    })
                    $mainBlog.css({
                        paddingTop: 0
                    })
                }
            }
            //iconAnimate
            var animOnce = true, positions = [{
                'left': '10%',
                'top': '5%'
            }, {
                'left': '3%',
                'top': '31%'
            }, {
                'left': '10.2%',
                'top': '56%'
            }, {
                'right': '9%',
                'top': '4%'
            }, {
                'right': '5%',
                'top': '31%'
            }, {
                'right': '10%',
                'top': '56%'
            }]
            var iconAnimate = function () {

                var $iconList = $('.icon-box >li'), i = 0;
                var icons = function (val) {
                    if (i < 4 && i < $iconList.length) {
                        $iconList.eq(val).addClass('animate').animate({
                            left: positions[val].left,
                            top: positions[val].top,
                            opacity: 1
                        }, 400, 'easeOutBack', function () {
                            icons(i++)
                        })
                    } else if (i >= 4 && i <= $iconList.length) {
                        $iconList.eq(val).addClass('animate').animate({
                            right: positions[val].right,
                            top: positions[val].top,
                            opacity: 1
                        }, 400, 'easeOutBack', function () {
                            icons(i++)
                        })
                    }
                }
                icons(i)
                animOnce = false

            }
            //condition for desktop only
            if (!isMobile) {

                if ($('.animated-section').length) {
                    $animSections.removeClass('animate')
                    animSection();
                }

                $(window).load(function () {

                    if ($('.parallax').length) {
                        for (var i = 0; i < $parallax.length; i++) {
                            parallax(parallaxArray[i], 0.3);
                        }

                    }
                })
                if ($('.icon-box').length) {
                    if ($(window).scrollTop() >= $('.preview-block').offset().top - ($(window).height() * 0.1) && animOnce == true) {
                        iconAnimate();
                    }
                }
                if ($('#main-blog').length) {
                    fixedBlog()
                }

                $(window).scroll(function () {
                    if ($('.animated-section').length) {
                        animSection();
                    }
                    if ($('.parallax').length) {
                        for (var i = 0; i < $parallax.length; i++) {
                            parallax(parallaxArray[i], 0.3);
                        }
                    }
                    if ($('.icon-box').length) {
                        if ($(window).scrollTop() >= $('.preview-block').offset().top - ($(window).height() * 0.1) && animOnce == true) {
                            iconAnimate();
                        }
                    }
                    if ($('#main-blog').length) {
                        fixedBlog()
                    }
                })
            } else if (isMobile && $(window).width() >= 1200) {

                if ($('.icon-box').length) {
                    iconAnimate();
                }
            }

            // ipad-frame video
            if ($('.ipad-frame').length) {
                var autoPlayVideo = function (vcode) {
                    $('.ipad-frame .embed-responsive').html('<iframe src="https://www.youtube.com/embed/' + vcode + '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
                }
                if (!isMobile) {
                    $('.ipad-frame .embed-responsive').on('click', function () {
                        autoPlayVideo('wN3gueLT0D8');
                    })
                } else {
                    autoPlayVideo('wN3gueLT0D8');
                }
            }

            // ipad-frame video

            if ($('.play-btn').length) {
                $('.play-btn').fancybox({
                    openEffect: 'none',
                    closeEffect: 'none',
                    prevEffect: 'none',
                    nextEffect: 'none',
                    padding: 0,
                    closeBtn: false,
                    helpers: {
                        media: {},
                        buttons: {},
                        title: {
                            type: 'inside'
                        },
                        overlay: {
                            css: {
                                'background': 'rgba(0,0,0,0.85)'
                            }
                        }
                    }
                });
            }

            //Custom Map
            if ($('#map').length) {
                var map = new GMaps({
                    div: '#map',
                    lat: 41.402619,
                    lng: -74.333062,
                    disableDefaultUI: true,
                    zoom: 17,
                    scrollwheel: false
                });
                map.drawOverlay({
                    lat: map.getCenter().lat(),
                    lng: map.getCenter().lng(),
                    content: '<a href="#"><img src="assets/img/map-marker.png" alt=""></a>',
                    verticalAlign: 'top',
                    horizontalAlign: 'center'
                });

                if ($(window).width() >= 1200) {
                    map.setOptions({
                        styles: Site.styles,
                        center: new google.maps.LatLng(41.401836, -74.329801),
                    });
                } else if ($(window).width() >= 992) {
                    map.setOptions({
                        styles: Site.styles,
                        center: new google.maps.LatLng(41.401836, -74.331801),
                    });
                } else if ($(window).width() >= 768) {
                    map.setOptions({
                        styles: Site.styles,
                        center: new google.maps.LatLng(41.401836, -74.329801),
                    });
                } else {
                    map.setOptions({
                        styles: Site.styles,
                        center: new google.maps.LatLng(41.400136, -74.332562),
                    });
                }
            }

        },

        headerStyle: function () {
            // Fixed Header JS
            var initScroll = $(window).scrollTop(), headerHeight = $('#header').outerHeight(), sticky = $('#header').attr('data-sticky'), $HeaderNav = $('#header').find('.navbar')
            var fixedNav = function () {
                var currentScroll = $(window).scrollTop()
                function inteligent() {
                    if (currentScroll >= initScroll) {
                        $HeaderNav.removeClass('down')
                        $HeaderNav.addClass('up')
                        if (currentScroll == $(document).height() - $(window).height()) {
                            $HeaderNav.removeClass('up')
                            $HeaderNav.addClass('down')
                        }
                        initScroll = currentScroll
                    } else {
                        $HeaderNav.removeClass('up ')
                        $HeaderNav.addClass('down')
                        initScroll = currentScroll
                    }
                }

                if (sticky == "yes") {
                    if (currentScroll > $('#header').offset().top + $('#header').outerHeight()) {
                        $HeaderNav.addClass('navbar-fixed-top')
                        $('#header').css("padding-top", headerHeight)
                        inteligent()
                    } else {
                        initScroll = currentScroll
                        $HeaderNav.removeClass('navbar-fixed-top up down')
                        $('#header').css("padding-top", "0")
                    }
                } else {
                    if (currentScroll > $('#header').offset().top + $('#header').outerHeight()) {
                        $('#header').css("padding-top", headerHeight)
                        $HeaderNav.addClass('navbar-fixed-top')
                    } else {
                        $HeaderNav.removeClass('navbar-fixed-top up down')
                        $('#header').css("padding-top", "0")
                    }
                }
            }
            fixedNav()
            $(window).scroll(function () {
                fixedNav()
            })
        }
    };

    Site.initialize();

})