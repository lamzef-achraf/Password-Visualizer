const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const feedback = document.getElementById("feedback");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const strength = getPasswordStrength(password);
  updateStrengthBar(strength);
});

function getPasswordStrength(password) {
  let strength = 0;

  // Conditions for determining password strength

function updateStrengthBar(strength) {
  let width = `${strength * 25}%`;  // Correct interpolation
  let color = "red";
  let message = "Very Weak";

  if (strength === 1) {
    color = "red";
    message = "Weak";
  } else if (strength === 2) {
    color = "orange";
    message = "Moderate";
  } else if (strength === 3) {
    color = "blue";
    message = "Strong";
} else if (strength === 4) {
    color = "green";
    message = "Very Strong";
  }

  // Update the strength bar with correct interpolation
  strengthBar.innerHTML = `<div style="height:100%; width:${width}; background:${color}; transition:width 0.3s;"></div>`;
  feedback.textContent = message;
}
