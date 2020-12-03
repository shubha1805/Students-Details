const profile = {
    name: "",
    qualification: ""
}
const profileReducer = (state = profile, action) => {
    switch(action.type){
        case "UPDATE_NAME":
            return {
                ...state,
                name: action.payload ? action.payload.name : state.name
            }
        default:
            return state

    }

}
export default profileReducer;