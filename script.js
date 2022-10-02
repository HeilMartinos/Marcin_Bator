///////ARROW
var arrow = $("#arrow");
arrow.hover(
  function () {
    arrow.animate({ bottom: "-=20px" });
  },
  function () {
    arrow.animate({ bottom: "+=20px" });
  }
);

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
