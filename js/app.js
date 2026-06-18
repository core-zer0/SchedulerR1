// Main application logic para la App de Horarios

// Inicializar la aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', function() {
    initializeHardwareListeners();
    
    // Verificación de entorno en consola interna
    if (typeof PluginMessageHandler !== 'undefined') {
        console.log('Running as R1 Creation');
    } else {
        console.log('Running in browser mode');
    }
});

// Oyentes de los botones de Hardware del Rabbit R1
function initializeHardwareListeners() {
    const SCROLL_SPEED = 120; // Píxeles que se moverá la pantalla en cada paso de rueda

    // Evento para girar la rueda hacia arriba
    window.addEventListener('scrollUp', () => {
        window.scrollBy({
            top: -SCROLL_SPEED,
            behavior: 'smooth' // Hace que el movimiento de los horarios sea fluido
        });
    });
    
    // Evento para girar la rueda hacia abajo
    window.addEventListener('scrollDown', () => {
        window.scrollBy({
            top: SCROLL_SPEED,
            behavior: 'smooth'
        });
    });
    
    // Evento para el botón físico lateral (PTT) por si quieres usarlo en el futuro
    window.addEventListener('sideClick', () => {
        console.log('Botón lateral pulsado');
    });
    
    window.addEventListener('longPressStart', () => {
        console.log('Pulsación larga iniciada');
    });
    
    window.addEventListener('longPressEnd', () => {
        console.log('Pulsación larga finalizada');
    });
}

// Manejador de mensajes del Plugin (Requerido para la estructura del SDK)
window.onPluginMessage = function(data) {
    console.log('Received plugin message:', data);
};