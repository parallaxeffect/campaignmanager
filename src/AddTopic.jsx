import React from 'react';
import {connect} from 'react-redux';

import {addTopic} from './action.js';

@connect(()=>{return {}}, (dispatch)=>{
	return {
		addTopic: ()=>{dispatch(addTopic("thing"))}
	}
})
export class AddTopic extends React.Component {
	render () {
		const {addTopic} = this.props;
		return <button onClick={()=>addTopic()}>Add Topic</button>
	}
}