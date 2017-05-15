

export function addTopic (name) {
	return {
		type: 'ADD_TOPIC',
		name
	}
}

export function viewTopic (id) {
	return {
		type: 'VIEW_TOPIC',
		id
	}
}