import React from 'react'
import {connect} from 'react-redux'

import {getTopicNameById, getNoteById} from './selector.js'
import {changeNotes, changeName} from './action.js'

@connect((state)=>{
	const name = getTopicNameById(state, state.view);
	const note = getNoteById(state, state.view);
	const id = state.view;
	return {name, note, id}
}, (dispatch)=>{
	return {
		changeNotes: (id, text) => dispatch(changeNotes(id, text)),
		changeName: (id, name) => dispatch(changeName(id, name))
	}
})
export class NoteView extends React.Component {
	handleChange (e) {
		const {id, changeNotes} = this.props;
		const note = e.target.value;
		changeNotes(id, note);
	}
	handleNameChange (e) {
		const {id, changeName} = this.props;
		const name = e.target.value;
		changeName(id, name);
	}
	render () {
		const {name, note} = this.props;
		return name != "" ? <div><input type='text' value={name} onChange={(e)=>this.handleNameChange(e)}/>
				<textarea value={note} onChange={(e)=>this.handleChange(e)}/>
			</div> : null
	}
}

export class Views extends React.Component {
	render () {
		return <NoteView/>
	}
}