(function () {
	"use strict";
	
    jQuery(document).ready(function($){
		
		/*Popover*/
		$('[data-toggle="popover"]').popover(
    		{
			html : true,
			trigger: 'focus',
			//trigger :'manual',
			content: function() {
				var content = $(this).attr("data-popover-content");
				return $(content).children(".popover-body").html();
			}
	    });
		
		$('[data-toggle="tooltip"]').tooltip();

       //For mobile menu
		$( ".mainmenu ul" ).clone().appendTo( $( ".nav-mobile" ) ); 
        $( ".logo" ).clone().prependTo( $( ".nav-mobile" ) ); 
        $( ".need-help" ).clone().appendTo( $( ".nav-mobile" ) );
        
        $(".enter-sha-slider").slick({
            slidesToShow: 1,
			arrows: false,
            dots: false,
            autoplay: true,
            infinite: true,
            //draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
        });

        $(".backed-slider").slick({
            slidesToShow:2,
			arrows: false,
            dots: true,
            autoplay: true,
            infinite: true,
            //draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
        });


        $(".rated-items").slick({
            slidesToShow:2,
            slidesToScroll: 2,
			arrows: false,
            dots: true,
            autoplay: true,
            infinite: true,
            //draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
            responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1  
              }
            }   
          ]
        });

		//WOW animation
		new WOW().init();
		
		$(".scrollup").on("click", function() {
			$("body,html").stop(false, false).animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
		$(window).on('scroll',function() {
		  if ($(this).scrollTop() > 0){  
			  $('header.for-sticky').addClass("sticky");
		     } else {
			  $('header.for-sticky').removeClass("sticky");
		   }
		   
		   if ($(this).scrollTop() > 200) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
           
		});

		
    });

}(jQuery));	
