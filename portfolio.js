// Inicjalizacja karuzeli
document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.content-carousel');

    carousels.forEach(carousel => {
        new Swiper(carousel, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        });
    });
});

// Dodanie animacji do sekcji przy scrollowaniu
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.portfolio-section, .about-me, .best-features');
    
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            section.classList.add('section-animate');
        }
    });
});
