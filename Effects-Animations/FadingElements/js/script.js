$(function () {

  // Fade out element over "slow"
  $(".red-box").fadeOut("slow");

  // Fade out element over 2000ms
  $(".red-box").fadeIn(2000);

  // Fade element to specific opacity 
  $(".red-box").fadeTo(3000, 0.2); //opacity 20%
  $(".green-box").fadeTo(2000, 0.5); //opacity 50%
  $(".blue-box").fadeTo(1000, 0.8); //opacity 80%

  // Fade element in or out, depending on current status
  $(".blue-box").fadeToggle();
  $(".blue-box").fadeToggle();

  // Notice that fadeToggle fades back to the blue box's previous opacity,
  // thus only back to 50% opacity.

  // Fade out element over 2000ms
  $(".red-box").fadeOut(2000);

  // Try to use fadeTo
  $(".red-box").fadeTo(1000, 1.0);

  // This doesn't work because fadeOut() will set display: none and fadeTo
  // doesn't modify the display property. Thus, it's not able to make it
  // reappear.

  // Back to original state
  $(".red-box").fadeIn(100);

  // To keep red box in the layout, use only fadeTo
  $(".red-box").fadeTo(2000, 0);

  // Can now make it re-appear in the way we tried above
  $(".red-box").fadeTo(1000, 1.0);

});

//class-> .
//id-> #