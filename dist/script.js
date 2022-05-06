const hambuger = document.querySelector('#hambuger');
const navbar = document.querySelector('#navbar');
const menuNavbar = document.querySelector('#menuNavbar');
const header = document.querySelector('#header');


hambuger.addEventListener('click', function () {
    hambuger.classList.toggle('hambuger-active');
    navbar.classList.toggle('bg-slate-400');
    header.classList.toggle('-translate-x-full');
    menuNavbar.classList.toggle('-translate-x-full');
})

menuNavbar.addEventListener("click", function(){
    hambuger.classList.toggle('hambuger-active');
    navbar.classList.toggle('bg-slate-400');
    header.classList.toggle('-translate-x-full');
    menuNavbar.classList.toggle('-translate-x-full');
})
