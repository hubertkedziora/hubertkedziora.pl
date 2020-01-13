$(
  () => {
    $(".name").on("mouseenter", () => {
      $(".description").fadeIn(250);
      $(".name").css("color", "goldenrod");
      $("body").css("backgroundColor", "rgba(0,0,0,0.4)");
    });

    $(".name").on("mouseleave", () => {
      $(".description").hide();
      $(".name").css("color", "white");
      $("body").css("backgroundColor", "rgba(0,0,0,0.0)");
    });

    $(".name2").on("mouseenter", () => {
      $(".description2").fadeIn(250);
      $(".name2").css("color", "goldenrod");
      $("body").css("backgroundColor", "rgba(0,0,0,0.4)");
    });

    $(".name2").on("mouseleave", () => {
      $(".description2").hide();
      $(".name2").css("color", "white");
      $("body").css("backgroundColor", "rgba(0,0,0,0.0)");
    });

    $(".name3").on("mouseenter", () => {
      $(".description3").fadeIn(250);
      $(".name3").css("color", "goldenrod");
      $("body").css("backgroundColor", "rgba(0,0,0,0.4)");
    });

    $(".name3").on("mouseleave", () => {
      $(".description3").hide();
      $(".name3").css("color", "white");
      $("body").css("backgroundColor", "rgba(0,0,0,0.0)");
    });

    $(".mailto").on("mouseenter", () => {
      $(".mailto").css("color", "goldenrod");
    });

    $(".mailto").on("mouseleave", () => {
      $(".mailto").css("color", "white");
    });

    $(".social").on("mouseenter", () => {
      $(".social").css("color", "goldenrod");
    });

    $(".social").on("mouseleave", () => {
      $(".social").css("color", "white");
    });
  },

  $(function() {
    var $element = $(".dot");
    setInterval(function() {
      $element.fadeIn(1200, function() {
        $element.fadeOut(1000, function() {
          $element.fadeIn(1200);
        });
      });
    }, 1000);
  })
);

$.mobile.loading().hide();
