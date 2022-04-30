const hambuger = document.querySelector('#hambuger');
const menuNavbar = document.querySelector('#navbar');
const header = document.querySelector('#header');


hambuger.addEventListener('click', function () {
    hambuger.classList.toggle('hambuger-active');
    menuNavbar.classList.toggle('hidden');
})

menuNavbar.addEventListener('click', function () {
    hambuger.classList.remove('hambuger-active');
    menuNavbar.classList.add('hidden');
})
