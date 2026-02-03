const name = document.getElementById('name');
const email = document.getElementById('email');
const emailtxt = document.getElementById('emailtxt');
const nametxt = document.getElementById('nametxt');

function validateForm() {
    if(!(name.value === "" || email.value === "")) {
        alert("Form submitted successfully!");
        message.innerHTML = "Form submitted successfully!";
        emailtxt.innerHTML = email.value;
        nametxt.innerHTML = name.value;
    }
}

function clearForm() {
    name.value = "";
    email.value = "";
    emailtxt.innerHTML = "";
    nametxt.innerHTML = "";
    message.innerHTML = "";
}