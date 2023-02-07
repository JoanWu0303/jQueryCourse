// Helper function which highlights the given element with yellow background
function highlight(element) {
  element.css("background-color", "rgba(180, 180, 30, 0.8)");
}

$(function () {

  // Select all <li> tags and then filter out all odd ones (keep only even ones)
  // Same as $("#list > li:even"), using more advanced CSS
  //var everySecondItem = $("#list").children("li").filter(":even");
  var everySecondItem = $("#list > li:even");
  highlight(everySecondItem);


  // The filter can even be a function that gets the index of an element and
  // returns true (to keep the element) or false (to filter it out).
  // For instance, to select only every third sub list item, we can do this:
  var everyThirdItem = $("li li").filter(function (index) {
    return index % 3 == 0;
  });
  highlight(everyThirdItem);

  //(只看sublist的3的倍數!!!)


  // Keep only the first item of a selection
  var first = $("li").first();
  highlight(first);

  // Keep only the last item of a selection
  var last = $("li").last();
  highlight(last);

  // Keep only the item at a specific index of a selection
  // For instance, keep only the 5th item (thus index 4):
  var fifth = $("li").eq(4);
  highlight(fifth);

  // Keep only the second last item (index -2):
  var secondLast = $("li").eq(-2);
  highlight(secondLast);
});