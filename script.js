// ==========================
// PART 2: FUNCTIONS & SCOPE
// ==========================

// Global variable (scope example)
let multiplier = 2;

// Function with parameter & return value
function doubleNumber(num) {
  let result = num * multiplier; // Local scope: result
  return result;
}

// Event listener for calculation
document.getElementById("calc-btn").addEventListener("click", () => {
  let value = 7;
  let doubled = doubleNumber(value); // Reusing function
  document.getElementById("calc-result").textContent =
    `Double of ${value} is ${doubled}`;
});

// ==========================
// PART 1 & 3: CSS + JS Integration
// ==========================

// Animate Box Button
const box = document.getElementById("box");
document.getElementById("animate-btn").addEventListener("click", () => {
  box.classList.toggle("bounce");
});

// Modal logic
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("show"); // Add class to trigger CSS animation
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show"); // Remove class to hide
});

// Click outside modal to close
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
