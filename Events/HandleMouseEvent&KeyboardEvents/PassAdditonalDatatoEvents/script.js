$(function () {
    // For all the event handlers you've learned, you can pass in an additional
    // first argument to attach EXTRA DATA to the EVENT OBJECT. 
    //This extra data is passed as a JavaScript OBJECT, which is encompassed by curly braces:

    $("#btn-click").click({
        user: "Joan",
        age: 19
    }, function (event) {

        // event.data carries the extra data: user and age
        console.log(event.data);

        // Call our function greetUser() and pass in the event data as its argument.
        greetUser(event.data);
    });

    // The function greetUser() accepts ONE parameter with user data (this will
    // be event.data) so that we can access it inside the function.
    function greetUser(userdata) {
        username = userdata.user || "Anonymous";
        userage = userdata.age;
        alert("welcome back " + username + " your age is: " + userage + " !");

    };


    $("#btn-hover").mouseenter({
        lastName: "Herry",
        height: 182
    }, function (event) {
        console.log(event.data);
    });
});
