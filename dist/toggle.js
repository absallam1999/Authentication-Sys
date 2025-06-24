"use strict";
function setupToggle(toggleId, inputId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);
    toggle.addEventListener("click", () => {
        input.type = input.type === "password" ? "text" : "password";
        toggle.textContent = input.type === "password" ? "Show Password" : "Hide Password";
    });
}
document.addEventListener("DOMContentLoaded", () => {
    setupToggle("reg-toggle", "reg-pass");
    setupToggle("login-toggle", "login-pass");
});
