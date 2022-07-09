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

    // Fake
    const courses = [
        {
            id:1,
            people: 25,
            total_hours: '1:20',
            title: 'Python par la pratique : 101 Exercices Corrigés',
            img: 'https://wallpaperaccess.com/full/187161.jpg',
            rate: 4.5,
            dollars: 99
        },{
            id:2,
            people: 25,
            total_hours: '1:20',
            title: 'Python par la pratique : 101 Exercices Corrigés',
            img: 'https://wallpaperaccess.com/full/187161.jpg',
            rate: 4.5,
            dollars: 99
        },{
            id:3,
            people: 30,
            total_hours: '1:20',
            title: 'Python par la pratique : 101 Exercices Corrigés',
            img: 'https://wallpaperaccess.com/full/187161.jpg',
            rate: 4.5,
            dollars: 99
        },{
            id:4,
            people: 120,
            total_hours: '1:20',
            title: 'Python par la pratique : 101 Exercices Corrigés',
            img: 'https://wallpaperaccess.com/full/187161.jpg',
            rate: 4.5,
            dollars: 99
        },{
            id:5,
            people: 155,
            total_hours: '1:20',
            title: 'Python par la pratique : 101 Exercices Corrigés',
            img: 'https://wallpaperaccess.com/full/187161.jpg',
            rate: 4.5,
            dollars: 99
        },
        {
            id:6,
            people: 200,
            total_hours: '1:20',
            title: 'Python par la pratique : 101 Exercices Corrigés',
            img: 'https://wallpaperaccess.com/full/187161.jpg',
            rate: 4.5,
            dollars: 99
        },
    ]

    const cards = document.querySelector('.cards')
    let htmls = ''
    courses.map((course) => {
        htmls += `
            <div class="l-4">
            <div class="card">
                <img src="${course.img}">
                <div class="card-inner">
                    <div class="card-info">
                        <span>
                            <i class="fa-solid fa-user"></i>
                            ${course.people}
                        </span>
                        <span>
                            <i class="fa-solid fa-clock"></i>
                            ${course.total_hours}
                        </span>
                    </div>
                    <h3 class="card-title">${course.title}</h3>
                    <div class="card-info">
                        <span class="card-rate">
                            <i class="fa-solid fa-star"></i>
                            ${course.rate}
                            (250)
                        </span>
                        <span class="card-price">99</span>
                    </div>
                </div>
            </div>
        </div>
        `
    })

    cards.innerHTML = htmls
    

})