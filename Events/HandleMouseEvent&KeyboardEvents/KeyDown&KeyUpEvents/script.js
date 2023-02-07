$(function () {
    //keydown() keyup()

    // To handle key presses, use keydown().
    // Usually, you'll attach this to the <html> tag so that the event is handled
    // whenever a key is pressed on the page.
    $("html").keydown(function (event) {
        // You normally want to use the event argument here to do something based
        // on which key was pressed. This information is stored in "event.which"
        console.log(event.which);
    });


    // Looking at the log of event.which, we can see that the arrow right key
    // corresponds to 39. So let's store this info to make the code readable:
    var arrow_Right = 39;

    // Now let's move the blue box when the user presses the arrow right key.
    $("html").keydown(function (event) {
        if (event.which === arrow_Right) {
            $(".blue-box").stop().animate({
                "margin-left": "+=10px"
                //marginLeft: "+=10px"s
            }, 50);
        }
    });

});