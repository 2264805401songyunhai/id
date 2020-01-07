const childUser = {
	data: ""
}
export default function users(state = childUser, action) {
	switch (action.type) {
		case "TABLE":
			return { ...action.payload, ...{ data: action.payload } }
		default:
			return state
	}
}