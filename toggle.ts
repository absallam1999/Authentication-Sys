function setupToggle(toggleId: string, inputId: string) {
  const input = document.getElementById(inputId) as HTMLInputElement;
  const toggle = document.getElementById(toggleId) as HTMLButtonElement;

  toggle.addEventListener("click", () => {
    input.type = input.type === "password" ? "text" : "password";
    toggle.textContent = input.type === "password" ? "Show Password" : "Hide Password";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupToggle("reg-toggle", "reg-pass");
  setupToggle("login-toggle", "login-pass");
});