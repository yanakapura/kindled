// $(window).scroll(function (event) {
//   if ($(this).scrollTop() > 80) {
//     $(".menu").slideDown();
//     return false;
//   } else {
//     $(".menu").slideUp();
//   }
// });

var lastScrollTop = 0;
$(window).scroll(function (event) {
  if ($(window).width() > 768) {
    var st = $(this).scrollTop();
    console.log(st);
    if (st >= lastScrollTop) {
      $(".menu").slideUp();
    } else {
      $(".menu").slideDown();
    }
    var alpha = Math.min(0.1 + (0.9 * $(this).scrollTop()) / 900, 0.9);
    var channel = Math.round(alpha * 5);
    $(".menu").css("background-color", "rgb(0,0,0,0." + channel + ")");
    if (st <= 4) {
      $(".menu").css("background-color", "rgb(0,0,0,0)");
    }
    lastScrollTop = st;
  }
});
