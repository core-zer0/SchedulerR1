// js/app.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializamos el entorno de hardware del SDK
    if (typeof initializeHardwareListeners === 'function') {
        initializeHardwareListeners();
    }

    // 2. CREAMOS UN CHIVATO VISUAL EN LA PANTALLA DEL R1
    const logger = document.createElement('div');
    logger.style.position = 'fixed';
    logger.style.top = '10px';
    logger.style.left = '10px';
    logger.style.background = 'rgba(0,0,0,0.8)';
    logger.style.color = '#00ff00';
    logger.style.padding = '5px';
    logger.style.fontSize = '12px';
    logger.style.zIndex = '9999';
    logger.style.pointerEvents = 'none';
    logger.innerText = 'Buscando rueda...';
    document.body.appendChild(logger);

    const SCROLL_SPEED = 100; // Píxeles a mover

    // 3. CAPTURA UNIVERSAL DE EVENTOS
    // Escuchamos absolutamente todo lo que presione el hardware
    window.addEventListener('keydown', (event) => {
        // Mostramos en la pantalla del R1 qué tecla exacta está enviando la rueda
        logger.innerText = `Tecla detectada: ${event.key} (Code: ${event.keyCode})`;

        // Si la rueda envía flechas, forzamos el scroll de la página entera
        if (event.key === 'ArrowDown' || event.keyCode === 40) {
            window.scrollBy(0, SCROLL_SPEED);
        } else if (event.key === 'ArrowUp' || event.keyCode === 38) {
            window.scrollBy(0, -SCROLL_SPEED);
        }
    }, { capture: true }); // 'capture: true' intercepta el evento antes de que hardware.js lo detenga

    // Por si acaso el SDK traduce la rueda como un evento 'wheel' estándar
    window.addEventListener('wheel', (event) => {
        logger.innerText = `Mouse Wheel detectado: ${event.deltaY}`;
        window.scrollBy(0, event.deltaY);
    }, { passive: true });
});