// Loader

$(window).on("load", function() {
  $(".loader .inner").fadeOut(1000, function() {
    $(".loader").fadeOut(750);
  });
});

$(document).ready(function() {
  // Plugin for superslides
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });
  // Typed words
  var typed = new Typed(".typed", {
    strings: ["Full Stack Developer.", "Student.", "Innovator."],
    typeSpeed: 95,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  // Carousel for images
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

  // Fancybox
  $("[data-fancybox]").fancybox();
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });

  // Filter for projects
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

  // Transition for Navbar links being selected

  // e is for passing the event in the function
  $("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html,body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  // Sticky Navbar
  const nav = $("#navigation");
  const navTop = nav.offset().top;
  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    const body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
