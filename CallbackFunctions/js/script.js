$(function () {
  // Fade out red box 
  $(".red-box").fadeTo(1000, 0.5, function () {

    // This callback function is executed once outer animation finishes.
    // So the green box starts fading out once the red box finished fading out.
    $(".green-box").fadeTo(1000, 0.5, function () {

      // Similarly, any code inside this function will start executing only once
      // the green box finishes fading out (after 2 seconds)
      $(".blue-box").animate({
        "margin-left": "+=200px",
        "margin-top": "10px",
        "width": "50px",
        "height": "50px",
        "opacity": "0.5"
      }, 2000);
    });
  });

});
