// Tab
var tabSwiper;
$(function () {
  if ($(".tab_swiper").length) {
    tabSwiper = new Swiper(".tab_swiper", {
      slidesPerView: "auto",
      spaceBetween: 24,
      observer: true,
      observeParents: true,
    });
  }
});
function tabGo(index) {
  tabSwiper.slideTo(index);
  $(".tab_swiper a").removeClass("active").eq(index).addClass("active");
}

// input
$(function () {
  $("input.text").each(function () {
    if ($(this).val() == "" || $(this).val() == undefined) {
      $(this).removeClass("wr");
    } else {
      $(this).addClass("wr");
    }
  });

  $("input.text")
    .on("input change", function () {
      $(this).toggleClass("wr", Boolean($(this).val()));
    })
    .trigger("propertychange");
});
