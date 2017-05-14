import React from 'react';
import {render} from 'react-dom';

import {TopicList} from './TopicList.jsx'

console.log("Hello Babel");

class App extends React.Component {
	render () {
		return <TopicList />
	}
}

render(<App/>, document.getElementById("app"));