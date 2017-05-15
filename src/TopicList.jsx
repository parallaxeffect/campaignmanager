import React from 'react';
import {connect} from 'react-redux';

import {getTopics} from './selector.js';

export class Topic extends React.Component {
	render () {
		const {name} = this.props;
	
		return <div>{name}</div>
	}
}

@connect(getTopics)
export class TopicList extends React.Component {
	render () {
		const {topics} = this.props;
	
		return <ol>{topics.map((item) => {
			return <li key={item.id}><Topic name={item.name}/></li>;
		})}</ol>
	}
}