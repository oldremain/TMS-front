$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    adaptiveHeight: true,
    speed: 700,
    fade: true,
    cssEase: 'ease-in',
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: true,
        },
      },
    ],
  });
});
var amountScrolled = 1500;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('fast');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});
