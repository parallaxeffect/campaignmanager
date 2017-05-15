
const initialState = {topics: [
	{ id: 0, name: "Xain"},
	{ id: 1, name: "Fizzit"},
	{ id: 2, name: "Sazh"},
	{ id: 3, name: "Mailee"}
	]};

export const reducer = (state=initialState, action) => {
	switch (action.type) {
	
	case 'ADD_TOPIC':
		const topic = { id: state.topics.length, 
						name: action.name }
		const list = state.topics.concat(topic);
		return { topics: list };
	
	default:
		return state;
	}
}