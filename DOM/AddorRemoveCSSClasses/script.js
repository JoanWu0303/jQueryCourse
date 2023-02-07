$(function () {
    // Additional CSS classes can be added to an element via addClass()

    // For instance, add the class .fancy-link to all anchor tags.
    // Note that you *do not* add a dot in front of the class name here.
    $("a").addClass("fancy-link");

    // You can also add multiple classes at once.
    $("p:first").addClass("large emphasize");

    // To attach a class based on the index of the element in your selected
    // set of elements, you can use a callback function.
    $("li li").addClass(function (index) {
        $(this).addClass("item-" + index);
    });

    // You can even use two parameters for the callback function, the index
    // and the current class of the element.
    $("div").addClass(function (index, currentClasses) {
        if (currentClasses === "dummy") {
            return "red-box";
        }
    });

    // You can again chain these calls to switch one class for another.
    $(".red-box").removeClass("red-box").addClass("green-box");

    $(".dummy").removeClass("dummy").addClass("green-box");

    // To quickly toggle one particular CSS class, use toggleClass().
    $("li li:first").toggleClass("emphasize");
});