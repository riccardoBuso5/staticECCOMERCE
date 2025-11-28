// Effetto Parallax del background
document.addEventListener('DOMContentLoaded', function() {
    const parallaxSpeed = 0.5; // Velocità del parallax (0-1, più basso = più lento)
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const body = document.body;
        
        // Applica la trasformazione di parallax
        body.style.backgroundPosition = `center ${-scrollPosition * parallaxSpeed}px`;
    });
});

// Versione alternativa con requestAnimationFrame (più performante)
let ticking = false;
let lastScrollY = 0;

window.addEventListener('scroll', function() {
    lastScrollY = window.pageYOffset;
    
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

function updateParallax() {
    const body = document.body;
    const parallaxSpeed = 0.5;
    body.style.backgroundPosition = `center ${-lastScrollY * parallaxSpeed}px`;
    ticking = false;
}

// Effetto parallax per le sezioni
document.addEventListener('DOMContentLoaded', function() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', function() {
        parallaxElements.forEach(element => {
            const scrollPosition = window.pageYOffset;
            const elementOffset = element.offsetTop;
            const distance = scrollPosition - elementOffset;
            const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
            
            element.style.transform = `translateY(${distance * speed}px)`;
        });
    });
});
