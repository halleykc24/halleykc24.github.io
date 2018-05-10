$(document).ready(function() {
  // Plugin for superslides
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Full Stack Developer.", "Student.", "Innovator."],
    typeSpeed: 95,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  var skillsTopOffset = $(".skillsSection").offset().top;
  // Finding position of skills section
  // to make sure percentages began to run during the scroll down
  // and not when the page is refreshed

  console.log(skillsTopOffset);

  // scroll position function
  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });

  $("[data-fancybox]").fancybox();
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");

    $(this).addClass("current");
    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });
    return false;
  });
});
