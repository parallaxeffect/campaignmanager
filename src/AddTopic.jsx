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
	handleTopic () {
		this.props.addTopic(this.state.text);
		this.setState({text: ''});
	}
	render () {
		const {addTopic} = this.props;
		return (<div>
							<input type='text' placeholder='New Topic' value={this.state.text} onChange={
								(e) => this.setState({text: e.target.value})}/>
							<button onClick={()=>this.handleTopic()}>Add</button>
						</div>)
	}
}
