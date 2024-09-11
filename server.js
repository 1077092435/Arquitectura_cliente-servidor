const http = require('http'); // Módulo nativo de Node.js
const { Server } = require('socket.io'); // Para WebSockets en tiempo real
const express = require('express'); // Express para manejo de rutas básicas

const app = express();
const server = http.createServer(app); // Crear servidor HTTP
const io = new Server(server); // Crear servidor de WebSockets sobre HTTP

const PORT = 3000;

// Rutas básicas
app.get('/', (req, res) => {
    res.send('Servidor de Sockets en funcionamiento');
});

// Evento para manejar la conexión de un cliente
io.on('connection', (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);

    // Escuchar evento de mensaje desde el cliente
    socket.on('mensaje', (msg) => {
        console.log(`Mensaje recibido del cliente ${socket.id}: ${msg}`);
        // Responder al cliente de inmediato
        socket.emit('respuesta', `Servidor recibió: ${msg}`);
    });

    // Evento cuando el cliente se desconecta
    socket.on('disconnect', () => {
        console.log(`Cliente desconectado: ${socket.id}`);
    });
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
