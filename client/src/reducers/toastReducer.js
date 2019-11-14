import * as actionTypes from "../actions/actionTypes";

const initialState = {
    toastMessage: ""
}

const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_SUCESS:
            return{ ...state, toastMessage: "User Successfully Logged In"}
        case actionTypes.LOGIN_USER_FAILED:
            return{ ...state, toastMessage: action.error}
        case actionTypes.REGISTRATION_SUCCESS:
            return{ ...state, toastMessage: action.payload}
        case actionTypes.LOGOUT_USER_SUCESS:
            return{ ...state, toastMessage: action.payload}
        
        case actionTypes.RESET_TOAST: 
            return{ ...state, toastMessage: ""}
        default:
            return state
    }
}

export default toastReducer;