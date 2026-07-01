// =========================
// SparkLearn Academy
// JavaScript
// =========================

// Welcome Message
window.onload = function () {
    console.log("Welcome to SparkLearn Academy!");
};

// =========================
// Contact Form Validation
// =========================

function validateContactForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === ""){
        alert("Please enter your name.");
        return false;
    }

    if(email === ""){
        alert("Please enter your email.");
        return false;
    }

    if(phone === ""){
        alert("Please enter your phone number.");
        return false;
    }

    if(message === ""){
        alert("Please enter your message.");
        return false;
    }

    alert("Message submitted successfully!");

    return true;
}

// =========================
// Login Validation
// =========================

function validateLogin(){

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if(email === ""){
        alert("Please enter your email.");
        return false;
    }

    if(password === ""){
        alert("Please enter your password.");
        return false;
    }

    alert("Login Successful!");

    return true;
}

// =========================
// Registration Validation
// =========================

function validateRegister(){

    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let phone = document.getElementById("regPhone").value.trim();
    let password = document.getElementById("regPassword").value;
    let confirm = document.getElementById("confirmPassword").value;

    if(name === ""){
        alert("Enter your full name.");
        return false;
    }

    if(email === ""){
        alert("Enter your email.");
        return false;
    }

    if(phone.length != 10){
        alert("Enter a valid 10-digit phone number.");
        return false;
    }

    if(password === ""){
        alert("Enter a password.");
        return false;
    }

    if(password !== confirm){
        alert("Passwords do not match.");
        return false;
    }

    alert("Registration Successful!");

    return true;
}