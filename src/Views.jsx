import React from 'react'
import {connect} from 'react-redux'

import {getTopicNameById, getNoteById} from './selector.js'
import {changeNotes} from './action.js'

@connect((state)=>{
	const name = getTopicNameById(state, state.view);
	console.log("Name:", name)
	const note = getNoteById(state, state.view);
	const id = state.view;
	return {name, note, id}
}, (dispatch)=>{
	return {
		changeNotes: (id, text) => dispatch(changeNotes(id, text))
	}
})
export class NoteView extends React.Component {
	handleChange (e) {
		const {id, changeNotes} = this.props;
		const note = e.target.value;
		changeNotes(id, note);
	}
	render () {
		const {name, note} = this.props;
		return name != "" ? <div>{name}
				<textarea value={note} onChange={(e)=>this.handleChange(e)}/>
			</div> : null
	}
}

export class Views extends React.Component {
	render () {
		return <NoteView/>
	}
}