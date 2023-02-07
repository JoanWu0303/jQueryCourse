$(function () {
    // While hover() with one callback function triggers both when entering and
    // leaving the element with the cursor, 
    //mouseenter() and mouseleave() allow you to attach different event handlers for both.

    $(".blue-box").mouseenter(function () {
        $(this).stop().fadeTo(500, 0.5);
    });

    $(".blue-box").mouseleave(function () {
        $(this).stop().fadeTo(500, 1);
    });


    // However, you can achieve the same with hover() as well. 
    // For this, you must pass in two callback functions:
    // First the one for "mouseenter", then the one for "mouseleave".
    //hover(handlerIn, handlerOut)
    $(".green-box").hover(function () {
        $(this).stop().fadeTo(2000, 0.5);
    }, function () {
        $(this).stop().fadeTo(2000, 1);
    });

});