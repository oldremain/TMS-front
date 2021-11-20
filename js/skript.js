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
        breakpoint: 576,
        settings: {
          autoplay:true,
          autoplaySpeed: 1500,
          infinite: true,
        }
      }
    ]
  });
});
