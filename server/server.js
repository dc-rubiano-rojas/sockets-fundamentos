const express = require('express');

const socketIO = require('socket.io');
const http = require('http');
// socketIO no trabaja directamente con express pero si con http

const path = require('path');

// Express esta basado en http de node
const app = express();
// Aca montamos el servidor con la configuracion que hagamos en express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO (input/output)
// Esta es la comunicación del backend
// Inicializamos el socketIO
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});