const btnElement = document.querySelector('.burger-menuBtn')
const overleyElement = document.querySelector('.overley')
const linkElements = document.querySelectorAll('.nav')
const burgerMenu = document.querySelector('.burger-menu-container')

export const burgerMenuButton = function () {
    btnElement.addEventListener ('click', () => {
        overleyElement.classList.add('active')
        burgerMenu.classList.add('active')
    })

    overleyElement.addEventListener ('click', () => {
        overleyElement.classList.remove('active')
        burgerMenu.classList.remove('active')
    }) 

    linkElements.forEach ((link) => {
        link.addEventListener ('click', () => {
            overleyElement.classList.remove('active')
            burgerMenu.classList.remove('active')
        })
    
    })
} 

