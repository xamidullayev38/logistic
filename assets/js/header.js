const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('.body');



menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('menuClicked')
    body.classList.toggle('bodyStopScroll')
    menu.classList.toggle('showMenu')
    
})