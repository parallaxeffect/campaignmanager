import React from 'react';
import {render} from 'react-dom';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist';

import {reducer} from './reducer.js'
import {TopicList} from './TopicList.jsx'
import {AddTopic} from './AddTopic.jsx'
import {Views} from './Views.jsx'

const store = (autoRehydrate())(createStore)(reducer);
persistStore(store);

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