var arrow = $("#arrow");
console.log(mainpage);

arrow.animate({ bottom: "30px" });
arrow.hover(
  function () {
    arrow.animate({ bottom: "20px" });
  },
  function () {
    arrow.animate({ bottom: "30px" });
  }
);

var counter = 0;
function chbg() {
  const bgs = [
    "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),rl(pic/bg1.png);",
    "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),rl(pic/bg2.jpg);",
  ];
  const main = document.querySelector("#mainpage");
  const bg = bgs[counter];
  main.style.backgroundImage = bg;

  counter++;
  if (counter > 1) {
    counter = 0;
  }
}
for (var i = 0; i < 10; i++) {
  setTimeout(chbg, 1000);
}
