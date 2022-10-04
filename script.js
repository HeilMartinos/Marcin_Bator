///////ARROW
var arrow = $("#arrow");
function arrowon() {
  arrow.animate({ bottom: "-=20px" });
}
function arrowoff() {
  arrow.animate({ bottom: "+=20px" });
}
arrow.hover(arrowon, arrowoff);

setTimeout(arrowon, 300);
setTimeout(arrowoff, 300);
setTimeout(arrowon, 300);
setTimeout(arrowoff, 300);
///////SLIDER
var active = 0;
var imgs = [];
for (var i = 0; i < 2; i++) {
  var nr = i + 1;
  imgs[i] = { url: $("#bgimg" + nr), value: "hidden" };
}
chbg();
function chbg() {
  for (var i = 0; i < 2; i++) {
    if (imgs[i].value === "visible") {
      imgs[i].url.css("display", "none");
      imgs[i].url.slideToggle("slow");
      imgs[i].value = "hidden";
      break;
    }
  }
  imgs[active].value = "visible";
  imgs[active].url.css("display", "block");
  imgs[active].url.slideToggle("slow");
  active++;
  if (active > 1) {
    active = 0;
  }
  setTimeout(chbg, 5000);
}

////////SCROLL
window.scrollTo(0, 0);
$("#arrow").click(function () {
  $("body").animate(
    {
      scrollTop: $("#page1").offset().top,
    },
    1000
  );
});
//////SCROLLMENU
var sgdist = document.querySelector("#mainpage").getBoundingClientRect().top;
var omdist = document.querySelector("#page1").getBoundingClientRect().top;
var usdist = document.querySelector("#page2").getBoundingClientRect().top;
var prdist = document.querySelector("#page3").getBoundingClientRect().top;
var kodist = document.querySelector("#page4").getBoundingClientRect().top;
var dist;
function delactive() {
  $(".underlineactive").addClass("underline");
  $(".underlineactive").removeClass("underlineactive");
}
function check() {
  dist = scrollY;
  var defaulty = 50;
  if (Math.abs(dist - sgdist) < defaulty) {
    delactive();
    $("#sg").children().addClass("underlineactive");
    $("#sg").children().removeClass("underline");
  }
  if (Math.abs(dist - omdist) < defaulty) {
    delactive();
    $("#om").children().addClass("underlineactive");
    $("#om").children().removeClass("underline");
  }
  if (Math.abs(dist - usdist) < defaulty) {
    delactive();
    $("#us").children().addClass("underlineactive");
    $("#us").children().removeClass("underline");
  }
  if (Math.abs(dist - prdist) < defaulty) {
    delactive();
    $("#pr").children().addClass("underlineactive");
    $("#pr").children().removeClass("underline");
  }
  if (Math.abs(dist - kodist) < defaulty) {
    delactive();
    $("#ko").children().addClass("underlineactive");
    $("#ko").children().removeClass("underline");
  }
}
$(window).on("scroll", check);
