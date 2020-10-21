AOS.init({
	duration: 2000,
});

var siteMagnificPopup = function() {
	$('.image-popup').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	closeBtnInside: false,
	fixedContentPos: true,
	mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	 gallery: {
	  enabled: true,
	  navigateByImgClick: true,
	  preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
	image: {
	  verticalFit: true
	},
	zoom: {
	  enabled: true,
	  duration: 300 // don't foget to change the duration also in CSS
	}
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,

	fixedContentPos: false
  });
};
siteMagnificPopup();