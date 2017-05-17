import {combineReducers} from 'redux';

	
export const topics = (state={}, action) => {
	switch (action.type) {
	
	case 'ADD_TOPIC':
		const id = action.id;
		const topic = { id, name: action.name }
		return { ...state, [id]: topic};
	
	case 'DELETE_TOPIC':
		console.log('DELETED')
		let { [action.id.toString()]: deleted, ...rest } = state;
		console.log(rest)
		return rest;
	
	case 'CHANGE_NAME':
		const topic1 = { ...state[action.id], name: action.name};
		return { ...state, [action.id]: topic1 }
	
	default:
		return state;
	}
}

export const view = (state=null, action) => {
	switch(action.type) {
	case 'VIEW_TOPIC':
		return action.id;
	default:
		return state;
	}
}

export const notes = (state={}, action) => {
	switch (action.type) {
	case "CHANGE_NOTES":
		return { ...state, [action.id]: action.text};
	default:
		return state;
	}
}

export const reducer = (state, action) => {
	switch (action.type) {
	case "RECEIVE_STATE":
		return action.state;
		
	default:
		return combineReducers({topics, view, notes})(state, action);
	}
}