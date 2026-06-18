// js/app.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Creamos una consola a pantalla completa en el Rabbit R1
    const consoleDiv = document.createElement('div');
    consoleDiv.style.position = 'fixed';
    consoleDiv.style.top = '0';
    consoleDiv.style.left = '0';
    consoleDiv.style.width = '100vw';
    consoleDiv.style.height = '100vh';
    consoleDiv.style.background = '#111';
    consoleDiv.style.color = '#38ff38';
    consoleDiv.style.fontFamily = 'monospace';
    consoleDiv.style.padding = '15px';
    consoleDiv.style.zIndex = '99999';
    consoleDiv.style.overflowY = 'scroll';
    consoleDiv.style.fontSize = '11px';
    consoleDiv.style.lineHeight = '1.4';
    document.body.appendChild(consoleDiv);

    let output = "=== R1 HARDWARE SNIFFER ===\n\n";

    // 2. EXTRAEMOS EL CÓDIGO FUENTE DE LA FUNCIÓN DEL SDK
    if (typeof initializeHardwareListeners === 'function') {
        output += "✅ initializeHardwareListeners ENCONTRADA.\n";
        output += "-----------------------------------------\n";
        output += initializeHardwareListeners.toString(); // Esto descompila la función y muestra su código
        output += "\n-----------------------------------------\n";
    } else {
        output += "❌ ERROR: initializeHardwareListeners NO está definida.\n";
        // Buscamos si hay otros objetos que inyecte el SDK o el Rabbit OS
        const keys = Object.keys(window).filter(k => 
            k.toLowerCase().includes('rabbit') || 
            k.toLowerCase().includes('hardware') || 
            k.toLowerCase().includes('storage')
        );
        output += `Objetos detectados en window: [${keys.join(', ')}]\n`;
    }

    output += "\n[Historial de Eventos Físicos]:\n";
    consoleDiv.innerText = output;

    // 3. CAPTURADOR DE EVENTOS OCULTOS
    // Escuchamos teclas de volumen, eventos de Android y de la comunidad
    const rareEvents = ['keydown', 'wheel', 'volumechange', 'rabbit-wheel', 'r1-event', 'message'];
    rareEvents.forEach(evtName => {
        window.addEventListener(evtName, (e) => {
            let details = '';
            if (e.key) details += ` key:${e.key}`;
            if (e.keyCode) details += ` code:${e.keyCode}`;
            if (e.detail) details += ` detail:${JSON.stringify(e.detail)}`;
            if (e.data) details += ` data:${JSON.stringify(e.data)}`;
            
            consoleDiv.innerText += `\n-> [${evtName}]${details}`;
        }, { capture: true, passive: true });
    });
});