var arrow = $("#arrow");
arrow.animate({ bottom: "30px" });
arrow.hover(
  function () {
    arrow.animate({ bottom: "20px" });
  },
  function () {
    arrow.animate({ bottom: "30px" });
  }
);
