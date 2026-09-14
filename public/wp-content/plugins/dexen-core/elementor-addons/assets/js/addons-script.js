(function ($) {
    "use strict";
        // Lazyload Images
    var bannerSlider = function ($scope, $) {
        if ($('.banner-style-one').length) {
            $('.banner-style-one').owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                dots: true,
                nav: false,
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 1000,
                autoplay: 5000
            });
            $('.banner-carousel-btn .left-btn').on('click', function() {
                $('.banner-style-one').trigger('next.owl.carousel');
                return false;
            });
            $('.banner-carousel-btn .right-btn').on('click', function() {
                $('.banner-style-one').trigger('prev.owl.carousel');
                return false;
            });
        }
    }
    var bannerSliderTwo = function ($scope, $) {
        if ($('.banner-style-two').length) {
            $('.banner-style-two').owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                dots: true,
                nav: false,
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 1000,
                autoplay: 5000
            });
            $('.banner-carousel-btn .left-btn').on('click', function() {
                $('.banner-style-two').trigger('next.owl.carousel');
                return false;
            });
            $('.banner-carousel-btn .right-btn').on('click', function() {
                $('.banner-style-two').trigger('prev.owl.carousel');
                return false;
            });
        }
    }
    var brandOne = function ($scope, $) {
        if ($('.brand-one__carousel').length) {
            $('.brand-one__carousel').owlCarousel({
                loop: true,
                margin: 70,
                nav: false,
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 3
                    },
                    600: {
                        items: 3
                    },
                    991: {
                        items: 4
                    },
                    1000: {
                        items: 5
                    },
                    1200: {
                        items: 5
                    }
                }
            });
        }
    }
    var teamSlider = function ($scope, $) {

        
        if ($('.team-one__thumb-carousel').length) {
            var teamOneThumbCarousel = new Swiper('.team-one__thumb-carousel', {
                slidesPerView: 2,
                spaceBetween: 30,
                freeMode: true,
                speed: 1400,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
            });
        }
    
    
        if ($('.team-one__carousel').length) {
            var teamOneCarousel = new Swiper('.team-one__carousel', {
                navigation: {
                    nextEl: '.team-carousel-btn .left-btn',
                    prevEl: '.team-carousel-btn .right-btn',
                },
                observer: true,
                observeParents: true,
                speed: 1400,
                mousewheel: true,
                autoplay: {
                    delay: 5000,
                },
                thumbs: {
                    swiper: teamOneThumbCarousel
                }
            });
        }

    }
    var testimonialOne = function ($scope, $) {
        if ($('.testimonial-one__carousel').length) {
            $('.testimonial-one__carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                navText: ['<span aria-label="Previous slide">&#10094;</span>', '<span aria-label="Next slide">&#10095;</span>'],
                dots: true,
                slideBy: 1,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 900,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                mouseDrag: true,
                touchDrag: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
        }
    }
    //var testimonialOne = function ($scope, $) {}
    var accrodionOne = function ($scope, $) {
        if ($('.accrodion-grp').length) {
            var accrodionGrp = $('.accrodion-grp');
            accrodionGrp.each(function() {
                var accrodionName = $(this).data('grp-name');
                var Self = $(this);
                var accordion = Self.find('.accrodion');
                Self.addClass(accrodionName);
                Self.find('.accrodion .accrodion-content').hide();
                Self.find('.accrodion.active').find('.accrodion-content').show();
                accordion.each(function() {
                    $(this).find('.accrodion-title').on('click', function() {
                        if ($(this).parent().hasClass('active') === false) {
                            $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                            $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                            $(this).parent().addClass('active');
                            $(this).parent().find('.accrodion-content').slideDown();
                        };
    
    
                    });
                });
            });
    
        };
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/dexen_banner_slider__o.default', bannerSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/dexen_banner_slider__o.default', bannerSliderTwo);
        elementorFrontend.hooks.addAction('frontend/element_ready/dexen_testimonials_carousel.default', testimonialOne);
        elementorFrontend.hooks.addAction('frontend/element_ready/dexen_brands.default', brandOne);
        elementorFrontend.hooks.addAction('frontend/element_ready/dexen_our_team.default', teamSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/dexen_faq.default', accrodionOne);
    });
})(jQuery);