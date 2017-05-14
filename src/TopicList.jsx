import React from 'react';


export class Topic extends React.Component {
	render () {
		name = this.props.name;
	
		return <div>{name}</div>
	}
}

export class TopicList extends React.Component {
	render () {
		const topics = ["topic"]
	
		return <ol>{topics.map((item) => {
			return <li key={item}><Topic name={item}/></li>;
		})}</ol>
	}
}