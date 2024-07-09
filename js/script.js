document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".menu-burger");
    const closeMenu = document.querySelector(".menu-burger__close");


    burger.addEventListener("click", function () {
        menu.classList.add("active");
    });

    closeMenu.addEventListener("click", function () {
        menu.classList.remove("active");
    });
});