let nav_btn = document.querySelector(".navTrigger");
let nav_bar = document.querySelector("header nav");

nav_btn.addEventListener("click", ()=>{
    nav_btn.classList.toggle("active");
    nav_bar.classList.toggle("show");
})