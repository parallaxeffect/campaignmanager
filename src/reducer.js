import {combineReducers} from 'redux';

const initialTopics = {
	0: { id: 0, name: "Xain"},
	1: { id: 1, name: "Fizzit"},
	2: { id: 2, name: "Sazh"},
	3: { id: 3, name: "Mailee"}
};

var topicId = 4;
	
export const topics = (state=initialTopics, action) => {
	switch (action.type) {
	
	case 'ADD_TOPIC':
		const id = topicId++;
		const topic = { id, name: action.name }
		return { ...state, [id]: topic};
	
	case 'DELETE_TOPIC':
		console.log('DELETED')
		let { [action.id.toString()]: deleted, ...rest } = state;
		console.log(rest)
		return rest;
	
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