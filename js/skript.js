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
