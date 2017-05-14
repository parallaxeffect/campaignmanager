import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from './reducer.js'
import {TopicList} from './TopicList.jsx'
import {AddTopic} from './AddTopic.jsx'

const store = createStore(reducer);

class App extends React.Component {
	render () {
		return (
		    <Provider store = {store}>
			<div>
				<TopicList/>
				<AddTopic/>
			</div>
			</Provider>)
	}
}

render(<App/>, document.getElementById("app"));