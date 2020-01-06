const childUser = {
	name: "",
	quan: ""
}
export default function users(state = childUser, action) {
	switch (action.type) {
		case "LOGIN":
			console.log(action)
			return { ...action.payload,...{name:action.payload.userName} }
		default:
			return state
	}
}