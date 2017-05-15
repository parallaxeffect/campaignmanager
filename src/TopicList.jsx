import React from 'react';
import {connect} from 'react-redux';

import {empty, getTopics} from './selector.js';
import {viewTopic} from './action.js';

@connect(empty, (dispatch) => {
	return {
		onSelect: (id) => dispatch(viewTopic(id))
	}
})
export class Topic extends React.Component {
	render () {
		const {name, id, onSelect} = this.props;
	
		return <div onClick = {() => onSelect(id)}>{name}</div>
	}
}

@connect(getTopics)
export class TopicList extends React.Component {
	render () {
		const {topics} = this.props;
	
		return <ol>{topics.map((item) => {
			return <li key={item.id}><Topic id={item.id} name={item.name}/></li>;
		})}</ol>
	}
}