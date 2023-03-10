$(function () {
    // jQuery allows you to attach arbitrary data to any element, represented as
    // HTML attributes prefixed with "data-", e.g. "data-images".

    // Here, we'll attach data about all available images to the gallery itself.

    // Select the <img> inside the gallery to manipulate it later
    var gallery = $(".gallery");
    // Initialize an array of all images for the gallery
    var images = [
        "images/laptop-mobile_small.jpg",
        "images/laptop-on-table_small.jpg",
        "images/people-office-group-team_small.jpg",
    ];

    // To attach data, use the data() function and pass in two arguments: 
    //First: the key for the data; Second: the actual data/value.
    gallery.data("availableImages", images);
    console.log(gallery.data());

    // To retrieve the data, again use just one argument: the key.
    console.log(gallery.data("availableImages"));

    gallery.data("name", "The perfect gallery");
    console.log(gallery.data("name"));

    // Remove data just as easily using removeData(), use just one argument: the key.
    gallery.removeData("name");
    console.log(gallery.data());

    // If you attach data directly in HTML via an attribute prefixed with "data-",
    // you can read that automatically from jQuery.
    var firstP = $("p:first");
    console.log(firstP.data());
    console.log(firstP.data("mydata"));  // Data coming from HTML attribute

});