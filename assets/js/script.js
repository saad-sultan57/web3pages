$(document).ready(function () {
  $(".stars_slider").owlCarousel({
    margin: 10,
    responsiveClass: true,
    nav: false,
    responsive: {
      1: {
        items: 1,
        autoHeight: true,
      },
      500: {
        items: 2,
        autoHeight: true,
      },
      767: {
        items: 3,
        autoHeight: true,
      },
      992: {
        items: 4,
        autoHeight: true,
      },
    },
  });
});
