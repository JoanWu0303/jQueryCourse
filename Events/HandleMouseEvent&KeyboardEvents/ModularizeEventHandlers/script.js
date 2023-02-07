$(function () {
    // Using named function as a callback -logEvent
    $("html").on("click keydown", logEvent);

    // Let's use this to add a gallery that switches to the next image on click
    var galleryImage = $(".gallery").find("img");
    galleryImage.on("click", swithToNextImage);

    var images = [
        "images/laptop-mobile_small.jpg",
        "images/laptop-on-table_small.jpg",
        "images/people-office-group-team_small.jpg",
    ];

    // In contrast to logEvent(), this is a nested function (it's nested into our
    // main jQuery function). This way, we can access galleryImage.
    var i = 0;
    function swithToNextImage(image) {
        i = (i + 1) % images.length;
        $(this).fadeOut(function () {
            $(this).attr("src", images[i]).fadeIn();
        });

        // galleryImage.fadeOut(function() {
        //     galleryImage.attr("src", images[i]).fadeIn();
        //   });
    };

});


// Normal, named function
function logEvent() {
    console.log("Mouse was clicked or key was pressed!!");
}



