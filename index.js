import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";
import profileReducer from "./profile";
import collegeReducer from "./collegeReducer";




const allReducer = combineReducers ({
    counter : counterReducer,
    isLogged : loggedReducer,
    signUp : signUpReducer,
    profile : profileReducer,
    college : collegeReducer,
   
})

export default allReducer;