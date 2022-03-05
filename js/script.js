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
    // console.log(st);
    if (st >= lastScrollTop) {
      $(".menu").slideUp();
    } else {
      $(".menu").slideDown();
    }
    var alpha = Math.min(0.1 + (0.9 * $(this).scrollTop()) / 900, 0.9);
    var channel = Math.round(alpha * 5);
    $(".menu").css("background-color", "rgb(0,0,0,0." + channel + ")");
    $(".menu-wrapper").css("background-color", "rgb(0,0,0,0." + channel + ")");
    if (st <= 4) {
      $(".menu").css("background-color", "rgb(0,0,0,0)");
      $(".menu-wrapper").css("background-color", "rgb(0,0,0,0)");
    }
    lastScrollTop = st;
  }
});

let i = 1;
let j = 1;
function slidersAlexMari() {
  setTimeout(() => {
    document.querySelector(".slider").src = `../images/alex-mary/slideshow1-${
      i < 3 ? ++i : (i = 1)
    }.jpg`;

    console.log("changed");

    document.querySelector(
      "#slider-magazine"
    ).src = `../images/alex-mary/magazine-${j < 9 ? ++j : (j = 1)}.jpg`;

    slidersAlexMari();
  }, 2000);
}

slidersAlexMari();

document.querySelector("#projects").addEventListener("click", () => {
  console.log("hello");
  document.querySelector(".menu-wrapper").classList.toggle("wrapper");
});
