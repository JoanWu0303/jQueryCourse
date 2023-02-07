$(function () {
    //JSON, $.getJSON()

    //Here, we use the Flickr API to retrieve image data as JSON (JavaScript Object Notation).

    // (1) First, store the URL of the API.
    // The ?jsoncallback parameter is necessary to avoid cross-origin errors in
    // modern browsers (you're not generally allowed to fetch data from remote sites).
    var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    var images = [];
    // (2) Next, we use jQuery's getJSON() function to access to API and retrieve data.
    $.getJSON(flickrApiUrl, {
        tags: "people, wedding",
        tagmode: "any", //all
        format: "json"
    }).done(function (data) {
        //Inside done(), we can work with the retrieved data.
        console.log(data);
        // Let's use jQuery $.each() function to create an <img> tag for each image .
        $.each(data.items, function (index, item) {
            console.log(item);
            // Create new image and add to gallery.
            images.push(item.media.m);
            //console.log(images);
            //$("<img>").attr("src", item.media.m).appendTo("#flickr");

            if (index == 9) {
                return false;
            }
        });
    }).fail(function (response) {
        //Inside fail(), you can handle error cases.
        console.log(response);
        alert("Ajax call failed.");
    });

    //ImageSlideshow
    var galleryImage = $("#flickr").find("img").first();
    var i = 0;
    setInterval(function () {
        i = (i + 1) % images.length;  // i = 1, 2, 0, 1, 2, 0, ...
        galleryImage.fadeOut(function () {
            // Inside the callback, "this" refers to the galleryImage
            $(this).attr("src", images[i]);
            $(this).fadeIn();
        });

        // Log current image path for debugging
        console.log(galleryImage.attr("src"));

    }, 3000);
});