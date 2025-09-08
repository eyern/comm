(function ($) {
 "use strict";
	// jQuery MeanMenu
	jQuery('nav#dropdown').meanmenu();
	//menu a active jquery
	var pgurl = window.location.href.substr(window.location.href
		.lastIndexOf("/")+1);
		$("ul li a").each(function(){
		if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
		$(this).addClass("active");
	$('header ul li ul li a.active').parent('li').addClass('parent-li');
	$('header ul li ul li.parent-li').parent('ul').addClass('parent-ul');
	$('header ul li ul.parent-ul').parent('li').addClass('parent-active');
	})
	//search bar exprnd
	$('.header-top-two .right button').on('click',function(){
		$('.header-top-two .right').toggleClass('widthfull');
	});
	//search bar border color
	$('.middel-top .center').on('click',function(){
		$('.middel-top .center').toggleClass('bordercolor');
	});
	//color select jquery
	$('.color-select > span').on('click',function(){
		$('.color-select > span').toggleClass('outline');
        $(this).addClass("outline").siblings().removeClass("outline");
	});
/*----------------------------
 nivoSlider active
------------------------------ */
	$('#mainSlider').nivoSlider({
		
		prevText: '<i class="mdi mdi-chevron-left"></i>',
		nextText: '<i class="mdi mdi-chevron-right"></i>'
	});
/*----------------------------
 plus-minus-button
------------------------------ */
	$(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});
/*----------------------------
 price-slider active
------------------------------ */  
	$( "#slider-range" ).slider({
		range: true,
		min: 40,
		max: 600,
		values: [ 150, 399 ],
		slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	" - $" + $( "#slider-range" ).slider( "values", 1 ) );

	 //for carousel slider of the slider section
	 $(".slider_area").owlCarousel({
		animateOut: "fadeOut",
		autoplay: true,
		loop: true,
		nav: false,
		autoplayTimeout: 2000,
		items: 3,
		dots: true,
	  });

      const sliderMain = function () {
        let $owl = $('.slider-main');
        $owl.owlCarousel({
            items: 1,
            autoplay: true,
			autoplayTimeout: 3000,
            loop: false,
            dots: false,
            rewind: true, // Go backwards when the boundary has reached
            nav: true,// Show next/prev buttons
            //   navContainerClass: 'owl-nav' by default,
            navElement: 'div',
            navClass: ['main-slider-previous', 'main-slider-next'],// Add these classes on navElement
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'], // by default text prev, next will not show
        });

    };

    $(function () {
        sliderMain();
        productSlider();
        SpecificCategorySlider();
        onTabChangeRefreshPositionOfCarousel();
        brandSlider();
    });

    /**
     * Check everything including DOM elements and images loaded
     */
    $(window).on('load',function () {
        showNewsletterModal();
       $('.ph-item').removeClass('ph-item');
    });

  //=== CountDownTimer===
function countDownTimer () {
	if ($('.time-countdown').length) {
		$('.time-countdown').each(function () {
			var Self = $(this);
			var countDate = Self.data('countdown-time'); // getting date

			Self.countdown(countDate, function(event) {
	     		$(this).html('<h2>'+ event.strftime('%D : %H : %M : %S') +'</h2>');
	   		});
		});
	};
	if ($('.time-countdown-two').length) {
		$('.time-countdown-two').each(function () {
			var Self = $(this);
			var countDate = Self.data('countdown-time'); // getting date

			Self.countdown(countDate, function(event) {
	     		$(this).html('<li> <div class="box"> <span class="days">'+ event.strftime('%D') +'</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">'+ event.strftime('%H') +'</span> <span class="timeRef clr-1">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">'+ event.strftime('%M') +'</span> <span class="timeRef clr-2">minutes</span> </div> </li> <li> <div class="box"> <span class="seconds">'+ event.strftime('%S') +'</span> <span class="timeRef clr-3">seconds</span> </div> </li>');
	   		});
		});
	};
}



//=== About Carousel ===
function aboutCarousel () {
    if ($('.about-carousel-box').length) {
        $('.about-carousel-box').owlCarousel({
            dots: true,
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                '<span class="fa fa-angle-left left"><p>Prev</p></span>',
                '<span class="fa fa-angle-right right"><p>Next</p></span>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}

//=== History Carousel ===
function historyCarousel () {
    if ($('.history-carousel').length) {
        $('.history-carousel').owlCarousel({
            dots: true,
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="flaticon-back"></i>',
                '<i class="flaticon-arrow"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}

//=== Testimonial Carousel ===
function testimonialCarousel () {
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            dots: true,
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<i class="flaticon-back"></i>',
                '<i class="flaticon-arrow"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}


/*--------------------------
 // simpleLens
 ---------------------------- */
	$('.simpleLens-image').simpleLens({
		
	});
	
})(jQuery); 