Presentación del Producto
1. Descripción del Producto
- Se ha desarrollado una aplicación cliente-servidor utilizando Node.js, Express y WebSockets (socket.io). Esta aplicación permite una comunicación bidireccional en tiempo real entre un cliente y un servidor. El cliente envía mensajes al servidor, el cual procesa y responde de inmediato. La arquitectura sigue el patrón cliente-servidor.

2. Código y Explicación de su Operación
El repositorio contiene dos archivos principales:
- server.js: Configura el servidor Express y socket.io. Escucha las conexiones entrantes de clientes y gestiona el envío y recepción de mensajes.
- client.js: Funciona como cliente, conectándose al servidor mediante WebSockets y permitiendo la interacción desde la terminal.
Puedes revisar los detalles del código en el repositorio.

3. Montaje y Herramientas Utilizadas
Herramientas:
- Node.js: Entorno para ejecutar JavaScript del lado del servidor.
- Express: Framework para la construcción del servidor HTTP.
- socket.io y socket.io-client: Para manejar la comunicación en tiempo real.
- GitHub: Repositorio para gestionar el código.

4. Aplicación y Objetivo del Ejercicio
La aplicación tiene como objetivo implementar y demostrar el patrón cliente-servidor en un entorno práctico. Este tipo de arquitectura es comúnmente utilizado en sistemas de chat, juegos en línea y aplicaciones de notificación en tiempo real. El cliente envía mensajes que son recibidos por el servidor y procesados en tiempo real, con respuestas inmediatas.
