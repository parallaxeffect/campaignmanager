const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, "www");
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		
	},
	watchOptions: {
		poll: 3000
	}
}

module.exports = config;