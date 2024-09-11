Patrón cliente - servidor

Aplicación basica realizada en Node.js con express

Logica del patron realizado:

1. server.js
Este archivo configura el servidor de WebSocket usando socket.io y el módulo nativo http de Node.js junto con express. Crea un servidor HTTP que también sirve rutas básicas mediante Express. Al iniciar, escucha conexiones de clientes WebSocket y maneja eventos como la recepción de mensajes y el envío de respuestas. Cada vez que un cliente envía un mensaje, el servidor lo recibe, procesa el mensaje y responde de inmediato al cliente.

2. client.js
Este archivo actúa como el cliente que se conecta al servidor WebSocket. Utiliza socket.io-client para establecer la conexión con el servidor y envía mensajes a través de la conexión WebSocket. El cliente también escucha las respuestas del servidor y las muestra en la consola. Permite al usuario ingresar mensajes desde la terminal, enviarlos al servidor y recibir respuestas sin bloquear la interacción. El cliente se desconecta cuando el usuario escribe exit.