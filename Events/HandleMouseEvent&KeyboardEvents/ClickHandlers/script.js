$(function () {

    // Click handler can be attached by passing a callback function to the click()
    // function. Whatever code you write into the callback function is then
    // executed whenever the user clicks the element.
    // You can add a parameter to the callback to retrieve additional info about
    // the event. Accordingly, we call the parameter "event".

    $("#btn-click").click(function (event) {
        console.log(event);
        alert("Button was clicked!");
    });

    // As always in jQuery, inside the callback, you can refer to the element as $(this).
    $(".red-box").click(function () {
        $(".red-box").fadeTo(1000, 0.5);
        // $(this).fadeTo(1000, 0.5);

    });
});