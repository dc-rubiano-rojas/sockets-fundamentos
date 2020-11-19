/* Esta funcion io() aparece gracias al script anterior */
var socket = io();


// on() escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});


// emit() Emitir o enviar información
socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    mensaje: 'salut monde'
}, function(resp) {
    // se ejecuta cuando todo salga bien
    console.log('Respuesta Server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});