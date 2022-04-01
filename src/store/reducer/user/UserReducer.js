import { GET_USER } from "./UserTypes"
const initialState = {
    full_name: "Hamza Ziani"
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return state
        default:
            return state
    }
}
export default UserReducer;