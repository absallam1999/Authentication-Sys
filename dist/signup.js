import { loadUsers, saveUsers } from "./mockBackend.js";
import { isValid, passwordRegex } from "./validators.js";
const regName = document.getElementById("reg-name");
const regMail = document.getElementById("reg-email");
const regPass = document.getElementById("reg-pass");
const regConfirmedPass = document.getElementById("reg-confirmPass");
const regBtn = document.getElementById("reg-btn");
const errorDiv = document.getElementById("signup-errors");
regBtn.addEventListener("click", (e) => {
    e.preventDefault();
    errorDiv.innerHTML = "";
    const errors = [];
    if (!regName.value)
        errors.push("Full name is required.");
    if (!isValid(regMail.value))
        errors.push("Invalid email format.");
    if (!passwordRegex.test(regPass.value))
        errors.push("Password must be strong (8+ chars, upper, lower, digit, special character).");
    if (regConfirmedPass.value !== regPass.value)
        errors.push("Passwords do not match.");
    // IF Email Exists:
    const users = loadUsers();
    if (users.some((u) => u.email === regMail.value))
        errors.push("Email already exists.");
    if (errors.length > 0) {
        errorDiv.innerHTML = errors.map((err) => `<p>${err}</p>`).join("");
        return;
    }
    // IF Email NOT:
    users.push({
        name: regName.value,
        email: regMail.value,
        password: regPass.value,
        confirmPassword: regConfirmedPass.value,
    });
    saveUsers(users);
    alert("Signup Successfull.");
    // Clear Input Values:
    const inputs = document.querySelectorAll("#reg-name, #reg-email, #reg-pass, #reg-confirmPass");
    inputs.forEach((input) => (input.value = ""));
});
