export function startMenuMovil(){
    const buttonNav = document.getElementById("showNav");
    const menu = document.getElementById("menu")

    buttonNav.addEventListener("click",()=>{
        menu.classList.toggle("show--menu")
    });
    menu.addEventListener("click",()=>{
        menu.classList.toggle("show--menu")
    });
};