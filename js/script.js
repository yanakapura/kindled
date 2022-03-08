// $(window).scroll(function (event) {
//   if ($(this).scrollTop() > 80) {
//     $(".menu").slideDown();
//     return false;
//   } else {
//     $(".menu").slideUp();
//   }
// });

document.body.addEventListener("click", (e) => {
  console.log(e.target);
});

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

    document.querySelector(
      "#slider-magazine"
    ).src = `../images/alex-mary/magazine-${j < 9 ? ++j : (j = 1)}.jpg`;

    slidersAlexMari();
  }, 2000);
}

slidersAlexMari();

document.querySelector(".menu-sm--icon").addEventListener("click", () => {
  console.log("click");
  document.querySelector(".menu-sm--icon").classList.toggle("active");
  document.querySelector(".menu-sm--icon").classList.toggle("not-active");
  document
    .querySelector(".menu-sm--ul")
    .classList.toggle("menu-sm--wrapper--down");
});

document
  .querySelector(".menu-sm--projects-button")
  .addEventListener("click", () => {
    document
      .querySelector(".menu-sm--projects-button-1")
      .classList.toggle("rotate-90");
    document
      .querySelector(".menu-sm--projects-button-2")
      .classList.toggle("rotate-180");
    // document
    //   .querySelector(".menu-sm--projects-ul")
    //   .classList.toggle("display-block");
    document
      .querySelector(".menu-sm--projects-ul")
      .classList.toggle("menu-sm--wrapper--down");
  });

document.querySelector("#projects").addEventListener("click", () => {
  console.log("hello");
  document.querySelector(".menu-wrapper").classList.toggle("wrapper");
});
