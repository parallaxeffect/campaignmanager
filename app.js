const express = require('express');
const app = express();

const port = process.env.listen;

app.use('/', express.static('/vagrant/www'));

const server = app.listen(port, function() {
	console.log("Listening on ", port);
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
	console.log('user connected');
	
	socket.on('state', (state)=> {
		console.log('received state');
		socket.broadcast.emit('state', state);
	}); 
});