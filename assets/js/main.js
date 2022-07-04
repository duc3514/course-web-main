document.addEventListener("DOMContentLoaded", () => {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    // 
    let num = 0
    const carouselElement = document.querySelectorAll('.carousel-item')
    const indicatorElements = document.querySelectorAll('.indicator-item')
    indicatorElements.forEach((item, index) => {
        num = index
        item.onclick = () => {
            $('.indicator-item.active').classList.remove('active')
            indicatorElements[num].classList.add('active')
            $('.carousel-item.active').classList.remove('active')
            carouselElement[num].classList.add('active')
        }
    })

    setInterval(() => {
        $('.indicator-item.active').classList.remove('active')
        indicatorElements[num].classList.add('active')
        $('.carousel-item.active').classList.remove('active')
        carouselElement[num].classList.add('active')
        
        num++
        if(num >= indicatorElements.length) {
            num = 0
        }
    }, 3000)


})