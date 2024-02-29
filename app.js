let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let resetSection = document.getElementById("resetSection");
let resetPasswordBtn = document.getElementById("resetPasswordBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let btnField = document.getElementById("btnField"); // New button container

signInBtn.onclick = function() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
    btnField.style.marginTop = "20px"; // Reset margin on click
}

signUpBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
    btnField.style.marginTop = "20px"; // Reset margin on click
}

function toggleReset() {
    if (resetSection.style.display === "none") {
        resetSection.style.display = "block";
        btnField.style.marginTop = "120px"; // Adjust margin to make space for the reset section
    } else {
        resetSection.style.display = "none";
        btnField.style.marginTop = "20px"; // Reset margin when the reset section is hidden
    }
}

resetPasswordBtn.onclick = function() {
    let newPasswordInput = document.getElementById("newPassword");
    let confirmPasswordInput = document.getElementById("confirmPassword");
    let newPassword = newPasswordInput.value.trim();
    let confirmPassword = confirmPasswordInput.value.trim();

    if (newPassword === "" || confirmPassword === "") {
        alert("Please enter both new and confirmed passwords.");
        return;
    }

    // Add functionality for resetting password
    alert("Your password was reset!");

    // Clear the input fields
    newPasswordInput.value = "";
    confirmPasswordInput.value = "";
}