import React from 'react';
import {connect} from 'react-redux';

export class Topic extends React.Component {
	render () {
		const {name} = this.props;
	
		return <div>{name}</div>
	}
}

@connect((state)=>{
	return {topics: state.list}
})
export class TopicList extends React.Component {
	render () {
		const {topics} = this.props;
	
		return <ol>{topics.map((item) => {
			return <li key={item}><Topic name={item}/></li>;
		})}</ol>
	}
}