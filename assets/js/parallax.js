// Effetto Parallax - Zoom out mentre scorra
document.addEventListener('DOMContentLoaded', function() {
    const parallaxSpeed = 0.0005; // Velocità dello zoom-out
    const initialScale = 1.2; // Scala iniziale (più grande)
    let ticking = false;
    
    function updateParallax() {
        const scrollPosition = window.pageYOffset;
        
        // Calcola il fattore di scale: più scorra, più piccola diventa
        const scale = Math.max(1, initialScale - (scrollPosition * parallaxSpeed));
        
        // Calcola la posizione Y per l'effetto di parallax
        const parallaxY = scrollPosition * 0.3;
        
        // Applica le CSS variables
        document.body.style.setProperty('--parallax-scale', scale);
        document.body.style.setProperty('--parallax-y', parallaxY + 'px');
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    // Richiama una volta all'inizio
    updateParallax();
});
