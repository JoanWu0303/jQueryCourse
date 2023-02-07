$(function () {
    $("#form").submit(function () {
        var name = $("#name").val();
        var password = $("#password").val();
        var message = $("#message").val();
        var checked = $("#checkbox").is(":checked");

        // Validation functions (defined below) to check each input.
        validateNameField(name, event);
        validatePasswordField(password, event);
        validateMessageField(message, event);
        validateCheckField(checked, event);
    });
});

//Name 
function validateNameField(name, event) {
    if (!isValidName(name)) {
        $("#name-feedback").text("Please enter at least five characters");
        event.preventDefault();
    } else {
        $("#name-feedback").text("");
    }
}

function isValidName(name) {
    return name.length >= 5;
}

//Password
function validatePasswordField(password, event) {
    if (!isValidPassword(password)) {
        $("#password-feedback").text("Please enter at least 7 characters and include @ and a number.");
        event.preventDefault();
    } else {
        $("#password-feedback").text("");
    }
}

function isValidPassword(password) {
    return password.length >= 7 && password.indexOf("@") != -1 && /.*[0-9].*/.test(password);
}

//Message
function validateMessageField(message, event) {
    if (isValidMessage(message)) {
        $("#message-feedback").text("Please enter something");
        event.preventDefault();
    } else {
        $("#message-feedback").text("");
    }
}

function isValidMessage(message) {
    return (message.trim() == "");
}

//Checkbox
function validateCheckField(checked, event) {
    if (!checked) {
        $("#checkbox-feedback").text("Please checked it");
        event.preventDefault();
    } else {
        $("#checkbox-feedback").text("");
    }
}
