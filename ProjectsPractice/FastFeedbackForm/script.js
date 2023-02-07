$(function () {
    var form = $("#form");

    form.submit(function () {
        var name = $("#name").val();
        var password = $("#password").val();
        var message = $("#message").val();
        var checked = $("#checkbox").is(":checked");
        validateNameField(name, event);
        validatePasswordField(password, event);
        validateMessageField(message, event);
        validateCheckField(checked, event);
    });

    // == NEW PART ==
    // In addition to the previous form validation code, we now provide faster
    // feedback to the user, namely when moving to the next input element.
    enableFastFeedback(form);
});

//Using blur() and change()
function enableFastFeedback(formElement) {
    var nameInput = formElement.find("#name");
    var passwordInput = formElement.find("#password");
    var messageInput = formElement.find("#message");
    var checkboxInput = formElement.find("#checkbox");

    //name
    nameInput.blur(function (event) {
        var name = $(this).val();
        validateNameField(name, event);
        if (!isValidName(name)) {
            $(this).css({
                "box-shadow": "0 0 4px #811",
                "border": "1px solid #600"
            });
        } else {
            $(this).css({
                "box-shadow": "0 0 4px #181",
                "border": "1px solid #060"
            });
        }
    });

    //password
    passwordInput.blur(function (event) {
        var password = $(this).val();
        validatePasswordField(password, event);
        if (!isValidPassword(password)) {
            $(this).css({
                "box-shadow": "0 0 4px #811",
                "border": "1px solid #600"
            });
        } else {
            $(this).css({
                "box-shadow": "0 0 4px #181",
                "border": "1px solid #060"
            });
        }
    });

    //message
    messageInput.blur(function (event) {
        var message = $(this).val();
        validateMessageField(message, event);
        if (!isValidMessage(message)) {
            $(this).css({
                "box-shadow": "0 0 4px #811",
                "border": "1px solid #600"
            });
        } else {
            $(this).css({
                "box-shadow": "0 0 4px #181",
                "border": "1px solid #060"
            });
        }
    });

    //checkbox -change()
    checkboxInput.change(function (event) {
        var isChecked = $(this).is(":checked"); //$(this).prop("checked")
        validateCheckField(isChecked, event);
        if (!isChecked) {
            $(this).add("label[for='checkbox']").css({
                "box-shadow": "0 0 4px #811",
                "border": "1px solid #600"
            });
        } else {
            $(this).add("label[for='checkbox']").css({
                "box-shadow": "0 0 4px #181",
                "border": "1px solid #060"
            });
        }
    });
}


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
    if (!isValidMessage(message)) {
        $("#message-feedback").text("Please enter something");
        event.preventDefault();
    } else {
        $("#message-feedback").text("");
    }
}

function isValidMessage(message) {
    return (message.trim() != "");
}

//Checkbox
function validateCheckField(checked, event) {
    if (!checked) {
        $("#checkbox-feedback").text("Please accpet the term!");
        event.preventDefault();
    } else {
        $("#checkbox-feedback").text("");
    }
}
