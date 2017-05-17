import React from 'react';
import {render} from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import io from 'socket.io-client';

import {reducer} from './reducer.js'
import {TopicList} from './TopicList.jsx'
import {AddTopic} from './AddTopic.jsx'
import {Views} from './Views.jsx'

const middleware = socket => store => next => action => {
	const result = next(action);
	if (action.type != 'RECEIVE_STATE') {
		const state = store.getState();
		console.log("outgoing state:", state);
		socket.emit('state', store.getState());
	}
	return result;
}

const socket = io();

const store = (autoRehydrate())(applyMiddleware(middleware(socket))(createStore))(reducer);
persistStore(store);

socket.on('state', (state) => {
	console.log("incoming state:", state);
	store.dispatch({type: 'RECEIVE_STATE', state});
});

class App extends React.Component {
	render () {
		return (
		    <Provider store = {store}>
			<div>
			<div>
				<TopicList/>
				<AddTopic/>
			</div>
			<Views/>
			</div>
			</Provider>)
	}
}

render(<App/>, document.getElementById("app"));