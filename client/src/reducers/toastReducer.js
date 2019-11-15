import * as actionTypes from "../actions/actionTypes";

const initialState = {
    toastMessage: ""
}

const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_SUCESS:
            return{ ...state, toastMessage: "User Successfully Logged In"}

        case actionTypes.REGISTRATION_SUCCESS:
        case actionTypes.LOGOUT_USER_SUCESS:
        case actionTypes.CREATE_EXAM_SUCCESS:
            return{...state, toastMessage: action.payload}

        case actionTypes.GET_EXAM_LIST_FAILED:
            return{...state, toastMessage: action.error}
        
        case actionTypes.RESET_TOAST: 
            return{ ...state, toastMessage: ""}
        default:
            return state
    }
}

export default toastReducer;