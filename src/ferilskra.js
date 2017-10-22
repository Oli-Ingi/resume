require("./ferilskra.css");
require("./style.css");

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
    
    if (img.next(".screenshot").length) 
      $("#img-controls").find("#show-next").css("display", "block");

    window.addEventListener("mousedown", function removeImg(e) {
      if ($(e.target).is("#show-next") || $(e.target).is("#show-prev")) return;

      $("#img-controls").find("img").hide();

      $(".screenshot")
        .removeClass("scalem-up")
        .removeClass("move-right")
        .removeClass("move-left")
        .removeClass("selected-img");

      $("#doddi-first-img").addClass("selected-img");

      $(".overlay").removeClass("the-darkness");
      window.removeEventListener("mousedown", removeImg);
    });
  });

  $("#show-next").click(function (e) {
    $(".selected-img")
    .addClass("move-right")
    .removeClass("selected-img")
    .next(".screenshot")
    .removeClass("move-left")
    .removeClass("move-right")
    .addClass("selected-img")
    .addClass("scalem-up");

    $("#show-prev").show();

    if (!$(".selected-img").next(".screenshot").length)
      $(this).hide();
  });

  $("#show-prev").click(function (e) {
    $(".selected-img")
    .addClass("move-left")
    .removeClass("selected-img")
    .prev(".screenshot")
    .removeClass("move-left")
    .removeClass("move-right")
    .addClass("selected-img")
    .addClass("scalem-up");

    $("#show-next").show();

    if (!$(".selected-img").prev(".screenshot").length)
      $(this).hide();
  });

});
