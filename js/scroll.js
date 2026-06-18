// js/scroll.js
(function() {
    // Ajusta este multiplicador (0.5 a 1.5) según qué tan rápido quieras que baje
    const SENSITIVITY = 0.8; 

    window.addEventListener('wheel', (event) => {
        // 'deltaY' es el valor que nos da el giro de la rueda
        window.scrollBy({
            top: event.deltaY * SENSITIVITY,
            behavior: 'smooth' // Esto hace que el scroll sea fluido y no brusco
        });
    }, { passive: true });
})();