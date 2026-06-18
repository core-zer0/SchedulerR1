// js/scroll.js
(function() {
    // Cantidad de píxeles que se desplazará la pantalla con cada paso de la rueda
    const SCROLL_SPEED = 60; 

    // 1. CAPTURA LA RUEDA FÍSICA DEL RABBIT R1 (Eventos de Flechas)
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
            window.scrollBy(0, SCROLL_SPEED);
            
            // Si el usuario está escribiendo en un input, evitamos que la flecha interfiera con el texto
            if (document.activeElement && document.activeElement.tagName === 'INPUT') {
                event.preventDefault(); 
            }
        } else if (event.key === 'ArrowUp') {
            window.scrollBy(0, -SCROLL_SPEED);
            
            if (document.activeElement && document.activeElement.tagName === 'INPUT') {
                event.preventDefault();
            }
        }
    }, { capture: true }); // 'capture: true' asegura que el scroll tenga prioridad sobre los inputs

    // 2. MANTENER COMPATIBILIDAD CON NAVEGADOR DE PC (Rueda de ratón normal)
    window.addEventListener('wheel', (event) => {
        window.scrollBy(0, event.deltaY * 0.8);
    }, { passive: true });
})();