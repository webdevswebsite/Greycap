(function($) {
    'use strict';

    /*--
    	Mobile Menu
    ------------------------*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    });


    // 6.HOME 2 HERO CAROUSEL
    $('.em-slick-slider-new').slick({
        dots: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 60000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    });
	// 6.HOME 2 HERO CAROUSEL
    $('.hero-slider-area').slick({
        dots: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    });

		// top quearys menu 
		var emsmenu = $(".em-quearys-menu i.t-quearys");
		var emscmenu = $(".em-quearys-menu i.t-close");
		var emsinner = $(".em-quearys-inner");
		emsmenu.on('click', function(){
			emsinner.addClass('em-s-open').fadeToggle(1000);
			 $(this).addClass('em-s-hidden');
			  emscmenu.removeClass('em-s-hidden');
		});		
		emscmenu.on('click', function(){	
			emsinner.removeClass('em-s-open').fadeToggle(1000);
			$(this).addClass('em-s-hidden');
			emsmenu.removeClass('em-s-hidden');
		});	


    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();
    /*---------------------
    Nivo Slider active js 
    --------------------- */
    $('#mainSlider').nivoSlider({
        directionNav: true,
        animSpeed: 500,
        slices: 18,
        pauseTime: 900000,
        pauseOnHover: false,
        controlNav: true,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    });
    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });

    /*--
    	One Page Nav
    ----------------------------------- */
    var top_offset = $('.one_page').height() - 100;
    $('.one_page .consultant_menu .nav_scroll').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 1000,
        scrollOffset: top_offset,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });
    $(".nav_scroll > li:first-child").addClass("current");
    /* sticky nav 1 */
    $('.one_page').scrollToFixed({
        preFixed: function() {
            $(this).find('.scroll_fixed').addClass('prefix');
        },
        postFixed: function() {
            $(this).find('.scroll_fixed').addClass('postfix').removeClass('prefix');
        }
    });
    /* sticky nav 2 */
    var headers1 = $('.trp_nav_area');
    $(window).on('scroll', function() {

        if ($(window).scrollTop() > 200) {
            headers1.addClass('hbg2');
        } else {
            headers1.removeClass('hbg2');
        }

    });
    /*---------------------
    counterUp
    --------------------- */
    $('.countr_text h1').counterUp({
        delay: 10,
        time: 1000
    });	
    /* Portfolio Isotope  */
    $('.em_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.em_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });


            $('.filter_menu li').on('click', function() {

                $('.filter_menu li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });

    /*--------------------------
    	blog messonary
    ---------------------------- */
    $('.bgimgload').imagesLoaded(function() {
        if ($.fn.isotope) {
            var $blogmassonary = $('.blog-messonary');
            $blogmassonary.isotope({
                itemSelector: '.grid-item',
                filter: '*',
                resizesContainer: true,
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });

        };
    });

    /*--------------------
    	testimonial 
    -----------------------------------*/

    $('.testimonial_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
	    $('.consultant_image_slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left''></i>", "<i class='fa fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    $('.blog_carousel').owlCarousel({
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
	
    $('.brand_carousel').owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })


    $('.single_gallery').owlCarousel({
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    $('.portfolio_gallery_post').owlCarousel({
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
    // top quearys menu 
    var accoll = $(".panel-heading1");
    accoll.on('click', function() {
        accoll.removeClass('active');
        $(this).addClass('active');
    });	
	
	

	
	


})(jQuery);