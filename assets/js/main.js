document.addEventListener("DOMContentLoaded", () => {
    (function ($) {
        "use strict";

    
        // 
        
    
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
        let htmlsCard = ''
        courses.map((course) => {
            htmlsCard += `
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
    
        cards.innerHTML = htmlsCard
    
    
        // Testimonials carousel
        $(".testimonials").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            dots: true,
            loop: true,
            // nav: true,
            margin: 20,
            responsive: {
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                768:{
                    items:1
                }
            }
        });
        
        
    })(jQuery);
    

})