document.addEventListener("DOMContentLoaded", function () {
    //Add event listener to the submit button
    var submitButton = document.getElementById("submitButton");
    if (submitButton) {
        submitButton.addEventListener("click", validateAndAddRow);
    }
});


function validateAndAddRow() {
    // Get form values
    var name = document.getElementById("name").value;
    var breed = document.getElementById("breed").value;
    var owner = document.getElementById("owner").value;
    var phone = document.getElementById("phone").value;

    //Validate form fields

    if (name.trim() === "") {
        alert("Please enter a name.");
        return false; //Prevents form from submission
    }

    if (breed.trim() === "") {
        alert("Please enter a breed.");
        return false;
    }

    if (owner.trim() === "") {
        alert("Please enter an owner.");
        return false;
    }

    if (phone.trim() === "") {
        alert("Please enter a phone number.");
        return false;
    }

    //Add row if validation passes.
    addRow();
    return false;
}


function addRow() {
    // Get form values
    var name = document.getElementById("name").value;
    var breed = document.getElementById("breed").value;
    var owner = document.getElementById("owner").value;
    var phone = document.getElementById("phone").value;

    // Create a new table row
    var tableBody = document.getElementById("tableBody");
    var newRow = tableBody.insertRow(tableBody.rows.length);

    // Insert cells with data
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = tableBody.rows.length; // ID (auto-increment)
    cell2.innerHTML = name; // Name from form
    cell3.innerHTML = breed; // breed from form
    cell4.innerHTML = owner; // owner from form
    cell5.innerHTML = phone; // phone from form

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("breed").value = "";
    document.getElementById("owner").value = "";
    document.getElementById("phone").value = "";
}
