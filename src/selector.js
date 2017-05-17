
export const empty = () => { return {} }

const makeArray = (object) => {
	return (Object.keys(object).map(key => object[key]));
}

export const getTopics = (state)=>{
	return {topics: makeArray(state.topics)};
}

export const getTopicNameById = (state, id) => {
	if (id == undefined) { return "" }
	if (!state.topics[id]) { return "" }
	return state.topics[id].name
}

export const getNoteById = (state, id) => {
	return state.notes[id] ? state.notes[id] : ""
}