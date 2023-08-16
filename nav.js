let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-list");

menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-x");
    navbar.classList.toggle('open');
})