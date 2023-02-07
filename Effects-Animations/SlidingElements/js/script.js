$(function () {
  // Slide element up to hide (over 2s)
  $(".red-box").slideUp(2000);

  // Slide back down to show element
  $(".red-box").slideDown(2000);

  //paragraph
  $("p").hide();
  $("p").slideDown(2000);

  // Toggle sliding up/down depending on current state
  $(".blue-box").slideToggle(2000);

});
