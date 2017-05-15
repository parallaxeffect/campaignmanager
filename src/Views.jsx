import React from 'react'
import {connect} from 'react-redux'

import {getTopicNameById} from './selector.js'

@connect((state)=>{
	const name = getTopicNameById(state, state.view)
	return {name}
})
export class View extends React.Component {
	render () {
		const {name} = this.props;
		return <div>{name}</div>
	}
}

export class Views extends React.Component {
	render () {
		return <View/>
	}
}