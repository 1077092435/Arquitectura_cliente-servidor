const { io } = require('socket.io-client'); // Cliente para conectarse al servidor de WebSockets
const prompt = require('prompt-sync')(); // Para interacción con el usuario desde la terminal

// Conectarse al servidor de WebSockets
const socket = io('http://localhost:3000');

// Evento cuando el cliente se conecta
socket.on('connect', () => {
    console.log('Conectado al servidor:', socket.id);
    interactWithServer(); // Iniciar interacción
});

// Función para interactuar con el servidor
function interactWithServer() {
    processMessage(); // Iniciar el ciclo de mensajes
}

function processMessage() {
    // Esperar el input del usuario de forma no bloqueante
    const message = prompt("Escribe un mensaje para el servidor (o 'exit' para salir): ");

    if (message.toLowerCase() === 'exit') {
        socket.disconnect(); // Desconectar el cliente
    } else {
        // Enviar mensaje al servidor
        socket.emit('mensaje', message);
        // Esperar y mostrar la respuesta del servidor
        socket.once('respuesta', (msg) => {
            console.log('Respuesta del servidor:', msg);
            processMessage(); // Volver a procesar otro mensaje
        });
    }
}

// Manejar la desconexión
socket.on('disconnect', () => {
    console.log('Desconectado del servidor.');
});
