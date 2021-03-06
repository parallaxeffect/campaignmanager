
// generate random uids
const uid = () => Math.random().toString(34).slice(2);

export function addTopic (name) {
	return {
		type: 'ADD_TOPIC',
		id: uid(),
		name
	}
}

export function viewTopic (id) {
	return {
		type: 'VIEW_TOPIC',
		id
	}
}

export function deleteTopic (id) {
	return {
		type: 'DELETE_TOPIC',
		id
	}
}

export function changeNotes (id, text) {
	return {
		type: "CHANGE_NOTES",
		id, text
	}
}

export function changeName(id, name) {
	return {
		type: "CHANGE_NAME",
		id, name
	}
}