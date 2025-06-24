// Source: ChatGPT
import { passwordRegex } from "./validators";

const passwordInput = document.getElementById("reg-pass") as HTMLInputElement;
const passStrengthDiv = document.getElementById("pass-strength") as HTMLDivElement;

passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;
  let strength = "";
  let color = "";

  if (val.length < 6) {
    strength = "Weak";
    color = "red"; 
  } else if (/^(?=.*[A-Z])(?=.*\\d).{6,}$/.test(val)) {
    strength = "Medium";
    color = "orange";
  }

  if (passwordRegex.test(val)) {
    strength = "Strong";
    color = "green";
  }

  passStrengthDiv.textContent = strength ? `Strength: ${strength}` : "";
  passStrengthDiv.style.color = color;
});
