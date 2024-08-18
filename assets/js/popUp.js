const popUps = document.querySelectorAll('.popUp'),
      popUpCloseBtns = document.querySelectorAll('.popUp-close');



popUpCloseBtns.forEach(close => {
    close.addEventListener('click', () => {
        close.parentElement.classList.add('hidePopUp')
        setTimeout(() => {
            close.parentElement.parentElement.classList.add('d-none');
            window.location.reload()
        },300)
    })
}) 
window.addEventListener('click', (e) => {
    popUps.forEach(popUp => {
        if(e.target == popUp){
            popUp.children[0].classList.add('hidePopUp')
            setTimeout(() => {
                popUp.classList.add('d-none');
                window.location.reload()
            },300)
        }

    })
})