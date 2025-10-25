$(document).ready(function () {
  //Owl
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    navText: ["PREV", "NEXT"],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  $("#projects-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 8,
      },
    },
  });

  $(".reviews-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    items: 1,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
  });

  var temaLogoCarousel = $("#tema-logo-carousel");
  temaLogoCarousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    autoplayTimeout: 5000,
    smartSpeed: 500, // Adjusted to be faster for better UX
    onInitialized: function (event) {
      $(".meaning-item").removeClass("active-meaning");
      $($(".meaning-item")[0]).addClass("active-meaning");
    },
    onTranslated: function (event) {
      // Get the original index from the data-carousel-index attribute of the active item
      // Owl Carousel's 'item.index' refers to the index within the cloned carousel.
      // 'event.item.element' refers to the original DOM element that is currently active.
      var originalIndex = event.page.index ?? 0;

      $(".meaning-item").removeClass("active-meaning");
      $("#meaning-" + (parseInt(originalIndex) + 1)).addClass("active-meaning");
    },
  });

  $(".meaning-item").on("click", function () {
    var index = $(this).data("carousel-index");
    temaLogoCarousel.trigger("to.owl.carousel", index);
  });
});
