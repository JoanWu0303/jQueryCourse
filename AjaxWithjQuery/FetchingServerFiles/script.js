$(function () {

    // You can load files from the server (or local file system in this case) with
    // jQuery using its load() function.
    $("#code").load("js/script.js");
    //This will result ->Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.
    //When you use chrome for your privacy safety.

    // You can also handle different responses, for instance if an error occurred.
    $("#code").load("script.js", function (response, status) {
        console.log(response);  // empty (normally contains the fetched contents)
        console.log(status);  // error

        if (status === "error") {
            alert("Could not find script.js");
        }
    });

});