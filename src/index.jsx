import React from 'react';
import {render} from 'react-dom';

console.log("Hello Babel");

class App extends React.Component {
	render () {
		return <div>React</div>
	}
}

render(<App/>, document.getElementById("app"));