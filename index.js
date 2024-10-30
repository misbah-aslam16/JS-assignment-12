//====================QUESTION 01=========================//
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    document.getElementById("displayName").innerText = name;
    document.getElementById("displayEmail").innerText = email;
    document.getElementById("displayPassword").innerText = password;

    document.getElementById("result").style.display = "block";
    document.getElementById("signupForm").reset();
}

//====================QUESTION 02=========================//

function toggleDetails() {
    const moreText = document.querySelector(".more-text");
    const button = document.querySelector(".read-more-button");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.innerText = "Read Less";
    } else {
        moreText.style.display = "none";
        button.innerText = "Read More";
    }
}

//====================QUESTION 03=========================//

function showForm() {
    document.getElementById("studentFormContainer").classList.add("visible");
    document.getElementById("studentForm").reset();
    document.getElementById("rowIndex").value = "-1";
}

function submitForm() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;
    const rowIndex = document.getElementById("rowIndex").value;

    if (rowIndex === "-1") {
        addRow(name, age, grade); 
    } else {
        editRow(rowIndex, name, age, grade); 
    }

    document.getElementById("studentForm").reset();
    document.getElementById("studentFormContainer").classList.remove("visible");
}

function addRow(name, age, grade) {
    const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = age;
    newRow.insertCell(2).innerText = grade;

    const actionsCell = newRow.insertCell(3);
    actionsCell.innerHTML = `
        <button onclick="deleteRow(this)">Delete</button>
        <button onclick="editRowForm(this)">Edit</button>
    `;
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editRowForm(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName("td");

    document.getElementById("name").value = cells[0].innerText;
    document.getElementById("age").value = cells[1].innerText;
    document.getElementById("grade").value = cells[2].innerText;
    
    const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    document.getElementById("rowIndex").value = Array.from(table.rows).indexOf(row);

    document.getElementById("studentFormContainer").classList.add("visible");
}

function editRow(rowIndex, name, age, grade) {
    const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    const row = table.rows[rowIndex];

    row.cells[0].innerText = name;
    row.cells[1].innerText = age;
    row.cells[2].innerText = grade;
}