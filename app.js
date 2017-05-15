const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.listen;

app.use('/', express.static('/vagrant/www'));

const server = app.listen(port, function() {
	console.log("Listening on ", port);
});

const io = require('socket.io')(server);

const state = JSON.parse(fs.readFileSync('./state.json'));

io.on('connection', function(socket) {
	console.log('user connected');
	socket.emit('state', state);
	socket.on('state', (state)=> {
		console.log('received state');
		socket.broadcast.emit('state', state);
		fs.writeFile('./state.json', JSON.stringify(state))
	}); 
});