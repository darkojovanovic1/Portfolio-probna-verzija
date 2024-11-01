document.addEventListener('DOMContentLoaded', function() {
    const options = {
        root: null, // Koristi viewport kao root
        rootMargin: '0px 0px -20% 0px', // Postavi donji margin na -20% visine viewport-a
        threshold: 0 // Pokreće animaciju kada je bilo koji deo elementa vidljiv
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Prekida posmatranje nakon animacije
            }
        });
    }, options);

    document.querySelectorAll('.crossed').forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 32,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                
                spaceBetween: 100,
            },
        },
    });
});

let gmail = document.querySelector(".fa-envelope");
gmail.addEventListener('click', ()=>{
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=PCSdevelopment@gmail.com', '_blank');
})


document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2200,
        delay: 400,
        
    });
    sr.reveal('.header, .unleashing, .wcs, .first-text, .second-text, .button-box, .portfolio, .content' );
    sr.reveal('.unleashing-later, .providing, .new', {delay:500});
    sr.reveal('.bottom', {delay:800, origin: 'bottom'});

    sr.reveal('.left, .discussion, .logo-footer, .copyright', {origin:'left'});
    sr.reveal('.right, .launch, .footer-content', {origin:'right'});
});