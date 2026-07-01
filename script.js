setTimeout(() => {
document.getElementById("splash").style.display = "none";
}, 2500);

function showPage(page){
let pages = document.querySelectorAll(".page");
pages.forEach(p => p.classList.remove("active"));
document.getElementById(page).classList.add("active");
}
