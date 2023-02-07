$(function () {

    // The change event is used for input elements such as 
    //1. checkboxes, 2. radio button 3. select tags. 
    //They fire whenever the selection changes.

    // Add green indicator when checkbox is checked and red one otherwise.
    $("#checkbox").change(function () {
        var isChecked = $(this).is(":checked"); //prop("checked")
        if (isChecked)
            $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #181");
        else
            $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #811");
    });

    // Another common use case is to read the selected option from a <select>
    // element when a new option is selected.
    $("#selection").change(function () {
        var isSelectChange = $(this).find(":selected").text();
        alert("You change your selection to " + isSelectChange);
    });

});