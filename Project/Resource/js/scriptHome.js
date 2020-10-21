jQuery(document).ready(function($) {

	"use strict";

	var slider = function() {
		$('.nonloop-block-3').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
	    smartSpeed: 700,
			stagePadding: 15,
	    margin: 20,
	    autoplay: true,
	    nav: true,
		navText: ['<i class="fas fa-angle-double-left">', '<i class="fas fa-angle-double-right">'],
	    responsive:{
        600:{
        	margin: 20,
          items: 2
        },
        1000:{
        	margin: 20,
          items: 3
        },
        1200:{
        	margin: 20,
          items: 3
        }
	    }
		});
	};
    slider();

});