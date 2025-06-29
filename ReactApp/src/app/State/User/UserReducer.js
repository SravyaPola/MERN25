//reducer is a function which allows to set the state when any component needs to access
//this uses switch case statement to have multiple actions handling - create, update, delete etc
//each reducer will further get combined as one entity in store and will be accessed by store object when it subscribes
import * as actionTypes from "../actionTypes"

let initialState = {
    user : {
        userName : "",
        password : "",
        street : "",
        mobile : ""
    }
}

//reducer accepts state and action in its params
//action - is an object which contains two things
// type - the type of action is needed
// payload - the data object to be updated once type is matched
let userReducer = (state = initialState, action) => {
    console.log("User Reduer ", action)

    switch (action.type) {
        case actionTypes.AddUserToStore:
            return {...state, user: action.payload}// we will actually have multiple states like product state, cart state, user state -
            //so now the previos state gets expandes and only the user state gets updated
        case actionTypes.LOGIN_USER:
            return { ...state, user: action.payload };

        case actionTypes.LOGOUT_USER:
            return { ...state, user: null };
        default:
            return state
    }

}

export default userReducer;