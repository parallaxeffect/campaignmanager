const express = require('express');
const app = express();

const port = process.env.listen;

app.use('/', express.static('/vagrant/www'));

const server = app.listen(port, function() {
	console.log("Listening on ", port);
});