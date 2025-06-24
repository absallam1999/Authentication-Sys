import { loadUsers } from "./mockBackend.js";
import { isValid } from "./validators.js";
const logMail = document.getElementById("login-email");
const logPass = document.getElementById("login-pass");
const logBtn = document.getElementById("login-btn");
const rememberMe = document.getElementById("rememberMe");
const errorDiv = document.getElementById("signin-errors");
logBtn.addEventListener("click", (e) => {
    e.preventDefault();
    errorDiv.innerHTML = "";
    const errors = [];
    if (!isValid(logMail.value))
        errors.push("Full name is required.");
    if (!logPass.value)
        errors.push("Password is Required.");
    const users = loadUsers();
    const foundUser = users.filter((u) => u.email === logMail.value && u.password === logPass.value)[0];
    if (!foundUser)
        errors.push("Incorrect email or password.");
    if (errors.length > 0) {
        errorDiv.innerHTML = errors.map((err) => `<p>${err}</p>`).join("");
        return;
    }
    if (rememberMe.checked) {
        localStorage.setItem("rememberedUser", logMail.value);
    }
    else {
        localStorage.removeItem("rememberedUser");
    }
    alert("Login Successful!");
    // Clear Input Values:
    const inputs = document.querySelectorAll("#login-email, #login-pass");
    inputs.forEach((input) => (input.value = ""));
});
