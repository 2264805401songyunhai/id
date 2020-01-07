const Dateset = {
  setDate: ""
}
export default function users(state = Dateset, action) {
  switch (action.type) {
    case "SETDATE":
      return { ...{ setDate: action.payload } }
    default:
      return state
  }
}