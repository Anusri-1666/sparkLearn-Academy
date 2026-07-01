// splash
setTimeout(() => {
document.getElementById("splash").style.display = "none";
}, 2000);

// login
setTimeout(() => {
document.getElementById("login").style.display = "none";
}, 4000);

// dashboard navigation
function showPage(pageId) {

// hide all pages
let pages = document.querySelectorAll(".page");
pages.forEach(p => p.classList.remove("active"));

// show selected page
document.getElementById(pageId).classList.add("active");
}
