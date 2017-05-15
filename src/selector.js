
export const empty = () => { return {} }

export const getTopics = (state)=>{
	return {topics: Object.keys(state.topics).map(id => state.topics[id])} 
}

export const getTopicNameById = (state, id) => {
	return id != undefined ? state.topics[id].name : ""
}