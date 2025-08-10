const slideElements = document.querySelectorAll ('.card')
let index = 0

export const slider = function () {
    const ascundeSlide = function () {
            slideElements.forEach((slide) => {
                slide.style.display = 'none'
        })
    }

    ascundeSlide()
    slideElements[index].style.display = 'block'

    setInterval (() => {
        ascundeSlide()
        
        index = index + 1
        if (index >= slideElements.length) {
            index = 0
        }
        
        slideElements[index].style.display = 'block'
    }, 2500) 
}
    