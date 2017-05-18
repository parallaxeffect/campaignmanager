import React from 'react';
import {connect} from 'react-redux';

import {addTopic} from './action.js';

@connect(()=>{return {}}, (dispatch)=>{
	return {
		addTopic: (text)=>{dispatch(addTopic(text))}
	}
})
export class AddTopic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}
	render () {
		const {addTopic} = this.props;
		return (<div>
							<input type='text' placeholder='New Topic' onChange={(e) => this.setState({text: e.target.value})}/>
							<button onClick={()=>addTopic(this.state.text)}>Add</button>
						</div>)
	}
}
