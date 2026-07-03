/* =========================
   SparkLearn Academy JS
========================= */

/* ---------- MOBILE MENU ---------- */
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

/* ---------- CONTACT FORM VALIDATION ---------- */
function validateContactForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name.length < 3) {
    alert("Name must be at least 3 characters");
    return false;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email");
    return false;
  }

  if (subject.length < 3) {
    alert("Subject is too short");
    return false;
  }

  if (message.length < 10) {
    alert("Message must be at least 10 characters");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

/* ---------- REGISTER FORM VALIDATION ---------- */
function validateRegisterForm() {
  let sname = document.getElementById("sname").value.trim();
  let fname = document.getElementById("fname").value.trim();
  let mname = document.getElementById("mname").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;

  if (sname.length < 3) {
    alert("Student name must be at least 3 characters");
    return false;
  }

  if (fname.length < 3 || mname.length < 3) {
    alert("Parent names must be at least 3 characters");
    return false;
  }

  if (phone.length != 10 || isNaN(phone)) {
    alert("Enter valid 10-digit phone number");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  if (password !== cpassword) {
    alert("Passwords do not match");
    return false;
  }

  alert("Registration successful!");
  return true;
}

/* ---------- SCROLL ANIMATION ---------- */
window.addEventListener("scroll", function () {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let position = card.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

/* ---------- INITIAL CARD STYLE ---------- */
document.addEventListener("DOMContentLoaded", function () {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.6s ease";
  });
});

/* ---------- BACK TO TOP BUTTON ---------- */
let btn = document.createElement("button");
btn.innerHTML = "↑";
btn.id = "topBtn";

btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "10px 15px";
btn.style.fontSize = "18px";
btn.style.display = "none";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.background = "#38bdf8";
btn.style.cursor = "pointer";

document.body.appendChild(btn);

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
