const childUser= {
    name:"",
    pass:""
}
export default function users(state = childUser, action) {
    switch (action.type) {
        case "SETUSER":
            return { ...action.payload }
        default:
            return { ...state }
    }
}