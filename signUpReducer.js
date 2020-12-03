const signUp = { 
    signUpObject: {}
}

const signUpReducer = (state =signUp, action) => {
    switch(action.type){
        case "SIGN_UP":
            return {
                ...state,
               signUpObject : action.payload.signUpDetails ? action.payload.signUpDetails: state.signUp.signUpObject
            }
        default:
            return state

    }

}
export default signUpReducer;