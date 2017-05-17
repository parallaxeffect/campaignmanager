import React from 'react';
import {connect} from 'react-redux';

import {empty, getTopics} from './selector.js';
import {viewTopic, deleteTopic} from './action.js';

@connect(empty, (dispatch) => {
	return {
		onSelect: (id) => dispatch(viewTopic(id)),
		onDelete: (id) => dispatch(deleteTopic(id))
	}
})
export class Topic extends React.Component {
	render () {
		const {name, id, onSelect, onDelete} = this.props;
	
		return <div onClick = {() => onSelect(id)}>{name}<span onClick = {() => onDelete(id)}>{"\u00D7"}</span></div>
	}
}

@connect(getTopics)
export class TopicList extends React.Component {
	render () {
		const {topics} = this.props;
		
		return <ol className='topicList'>{topics.map((item) => {
			return <li key={item.id}><Topic id={item.id} name={item.name}/></li>;
		})}</ol>
	}
}