// Funzionalità carosello per le sezioni menu e cocktail
let currentSlideIndex = 0;
let currentCocktailSlideIndex = 0;
let caroselloElement;
let cocktailCaroselloElement;

document.addEventListener('DOMContentLoaded', function() {
    caroselloElement = document.getElementById('menuCarousel');
    cocktailCaroselloElement = document.getElementById('cocktailCarousel');
    
    // Auto-scroll ogni 5 secondi per menu
    setInterval(() => {
        moveCarosello(1);
    }, 5000);
    
    // Auto-scroll ogni 6 secondi per cocktail (sfasato)
    setInterval(() => {
        moveCocktailCarosello(1);
    }, 6000);
});

// Funzioni Carosello Menu
function moveCarosello(direction) {
    if (!caroselloElement) return;
    
    const totalSlides = 5;
    currentSlideIndex += direction;
    
    // Loop back to start/end
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    updateCarosello();
}

function currentSlide(slideNumber) {
    currentSlideIndex = slideNumber - 1;
    updateCarosello();
}

function updateCarosello() {
    if (!caroselloElement) return;
    
    // Muovi carosello
    const translateX = -currentSlideIndex * 20; // 20% per slide
    caroselloElement.style.transform = `translateX(${translateX}%)`;
    
    // Aggiorna pallini
    const dots = document.querySelectorAll('.menu .carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

// Funzioni Carosello Cocktail
function moveCocktailCarosello(direction) {
    if (!cocktailCaroselloElement) return;
    
    const totalSlides = 5;
    currentCocktailSlideIndex += direction;
    
    // Loop back to start/end
    if (currentCocktailSlideIndex >= totalSlides) {
        currentCocktailSlideIndex = 0;
    } else if (currentCocktailSlideIndex < 0) {
        currentCocktailSlideIndex = totalSlides - 1;
    }
    
    updateCocktailCarosello();
}

function currentCocktailSlide(slideNumber) {
    currentCocktailSlideIndex = slideNumber - 1;
    updateCocktailCarosello();
}

function updateCocktailCarosello() {
    if (!cocktailCaroselloElement) return;
    
    // Muovi carosello
    const translateX = -currentCocktailSlideIndex * 20; // 20% per slide
    cocktailCaroselloElement.style.transform = `translateX(${translateX}%)`;
    
    // Aggiorna pallini
    const dots = document.querySelectorAll('.cocktail .carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentCocktailSlideIndex);
    });
}

// Supporto touch/swipe per mobile
let startX = 0;
let isDragging = false;

document.addEventListener('touchstart', function(e) {
    if (e.target.closest('.menu-carousel') || e.target.closest('.cocktail-carousel')) {
        startX = e.touches[0].clientX;
        isDragging = true;
    }
});

document.addEventListener('touchend', function(e) {
    if (!isDragging) return;
    isDragging = false;
    
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    
    // Distanza minima swipe
    if (Math.abs(diffX) > 50) {
        if (e.target.closest('.menu-carousel')) {
            if (diffX > 0) {
                moveCarosello(1); // Swipe sinistra - slide successiva
            } else {
                moveCarosello(-1); // Swipe destra - slide precedente
            }
        } else if (e.target.closest('.cocktail-carousel')) {
            if (diffX > 0) {
                moveCocktailCarosello(1);
            } else {
                moveCocktailCarosello(-1);
            }
        }
    }
});

// Supporto drag mouse per desktop
let mouseStartX = 0;
let isMouseDragging = false;

document.addEventListener('mousedown', function(e) {
    if (e.target.closest('.menu-carousel') || e.target.closest('.cocktail-carousel')) {
        mouseStartX = e.clientX;
        isMouseDragging = true;
        e.preventDefault();
    }
});

document.addEventListener('mouseup', function(e) {
    if (!isMouseDragging) return;
    isMouseDragging = false;
    
    const mouseEndX = e.clientX;
    const diffX = mouseStartX - mouseEndX;
    
    if (Math.abs(diffX) > 50) {
        if (e.target.closest('.menu-carousel')) {
            if (diffX > 0) {
                moveCarosello(1);
            } else {
                moveCarosello(-1);
            }
        } else if (e.target.closest('.cocktail-carousel')) {
            if (diffX > 0) {
                moveCocktailCarosello(1);
            } else {
                moveCocktailCarosello(-1);
            }
        }
    }
});

document.addEventListener('mousemove', function(e) {
    if (isMouseDragging) {
        e.preventDefault();
    }
});
