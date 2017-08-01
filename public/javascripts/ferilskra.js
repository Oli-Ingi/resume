$(document).ready(function () {
  $(".section-opener").click(function(e) {
    var content = $(this).next();

    if (content.is(":visible")) {
      content.slideUp(300);
      $(this).removeClass("open-section");
    } else {
      content.slideDown(300);
      $(this).addClass("open-section");
    }
  });

  $(".more").click(function(e) {
    var content = $(this).next();

    var arrowContainer = $(this).find("div");
    var arrows = arrowContainer.find("span");


    if (content.is(":visible")) {
      content.slideUp("slow");
      arrows.removeClass("arrows-hide");
      arrowContainer.removeClass("transx-hard");

      $(this).on("mouseleave", function mouseOut() {
        $(this).removeClass("less").addClass("more");
        $(this).off("mouseleave", mouseOut);
      });

    } else {
      content.slideDown("slow");
      arrows.addClass("arrows-hide");
      arrowContainer.addClass("transx-hard");

      $(this).on("mouseleave", function mouseOut() {
        $(this).removeClass("more").addClass("less");
        $(this).off("mouseleave", mouseOut);
      });

    }
  });

  $(".screenshot-origin").click(function (e) {
    var img = $(this).next();
    img.addClass("scalem-up");

    $(".overlay").addClass("the-darkness");

    window.addEventListener("mousedown", function removeImg(e) {
      img.removeClass("scalem-up");
      $(".overlay").removeClass("the-darkness");
      window.removeEventListener("click", removeImg);
    });
  });

});
