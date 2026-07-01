// ===============================
// SparkLearn Academy - Script.js
// ===============================


// 🔹 1. Mobile Navigation Toggle (if you add hamburger menu later)
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}


// 🔹 2. Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// 🔹 3. Form validation (Contact / Register / Login)
document.addEventListener("DOMContentLoaded", function () {

  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll("input");
      let valid = true;

      inputs.forEach(input => {
        if (input.value.trim() === "") {
          valid = false;
          input.style.border = "2px solid red";
        } else {
          input.style.border = "2px solid green";
        }
      });

      if (!valid) {
        alert("⚠ Please fill all fields correctly");
      } else {
        alert("✅ Form submitted successfully!");
        form.reset();
      }
    });
  });
});


// 🔹 4. Simple fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section, .card").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


// 🔹 5. Console message
console.log("🚀 SparkLearn Academy JS loaded successfully!");
