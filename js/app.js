// js/app.js
document.addEventListener('DOMContentLoaded', () => {
    // Activamos las funciones de hardware que vienen dentro de hardware.js
    if (typeof initializeHardwareListeners === 'function') {
        initializeHardwareListeners();
        console.log("Rueda y botones del Rabbit R1 inicializados.");
    } else {
        console.warn("No se encontró la función initializeHardwareListeners.");
    }
});