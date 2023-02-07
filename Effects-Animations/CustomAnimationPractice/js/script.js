$(function () {
  // Animate various CSS properties of the blue box
  $(".blue-box").animate({
    "margin-left": "+=200px",
    "opacity": "0.2",
    "height": "50px",
    "width": "50px",
    "margin-top": "25px"
  }, 1000);

  // Animate font size of all paragraphs
  $("p").animate({
    "font-size": "20px"
  }, 1000);

  // Animate various CSS properties of the green box
  $(".green-box").animate({
    opacity: "0.5",
    height: "50px",
    width: "50px",
    marginTop: "25px"
  }, 1000);
});


//CAN'T use COLOR!!!!
//JS Object -> Key+Value {" ": "  ", " ":" "}