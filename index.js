let assignedName = "";
document.body.onblur = addElement;
function addElement (assignedName) {
    // create a new div element
    const newDiv = document.createElement("div");
    // and give it some content
    const newContent = document.createTextNode("Your Akan Name is"+ assignedName);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("output-name");
    document.body.insertBefore(newDiv, currentDiv);
}

function getVal() {
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let assignedName = "";
    let dob = document.getElementById('Enter-date').value;
    let gender = document.getElementById('Enter-gender').value;
    gender = gender.toLowerCase()
    let birthday = new Date(dob);
    let dayOfWeek = birthday.getDay();
    if (gender == "female") {
        assignedName = femaleNames[dayOfWeek];
        addElement(assignedName);
    }
    else {
        assignedName = maleNames[dayOfWeek];
        addElement(assignedName);
    }

    return assignedName;
}



