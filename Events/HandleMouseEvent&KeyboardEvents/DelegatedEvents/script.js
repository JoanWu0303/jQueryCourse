$(function () {
    //Delegated Events: solve those dyanmically attached elements' event handlers: 
    // Attach the handler to a parent element that will always exist on the page. When the event
    // comes in, the parent then delegates the event to all defined children.

    // For this, you must use the on() function, and pass in which children should
    // handle the event. For instance, all <li> tags inside #content:
    $("#content").on("click", "p", function () {
        $(this).slideUp();
    });

    $("#content").append("<p>This is a added paragraph. </p>");

    $("body").on("mouseenter", "li", function () {
        $(this).css("color", "gray");
    });

});
