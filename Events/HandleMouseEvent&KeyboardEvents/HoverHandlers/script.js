$(function () {
    //:hover
    // Hover handlers are defined the same way as click handlers but using hover().
    // Hover events fire as soon as the cursor enters *or* leaves the element.

    $("#btn-hover").hover(function () {
        alert("Button was hovered!!!");
    });

    $(".green-box").hover(function () {
        $(this).text("I was hovered!");
    });

});