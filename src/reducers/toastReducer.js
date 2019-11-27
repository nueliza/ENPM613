import * as actionTypes from "../actions/actionTypes";

const initialState = {
    toastMessage: "",
    toastType: ""
}

const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_SUCESS:
            return{ ...state, toastMessage: "User Successfully Logged In", toastType:"SUCCESS"}

        case actionTypes.REGISTRATION_SUCCESS:
        case actionTypes.LOGOUT_USER_SUCESS:
        case actionTypes.CREATE_EXAM_SUCCESS:
        case actionTypes.DELETE_EXAM_SUCCESS:
        case actionTypes.DELETE_DISCUSSION_SUCCESS:
        case actionTypes.RESET_PREF_SUCCESS:
        case actionTypes.REPLY_TO_DISCUSSION_SUCCESS:
            return{...state, toastMessage: action.payload, toastType: "SUCCESS"}

        case actionTypes.GET_EXAM_LIST_FAILED:
        case actionTypes.DELETE_EXAM_FAILED:
        case actionTypes.DELETE_DISCUSSION_FAILED:
        case actionTypes.RESET_PREF_FAILED:
        case actionTypes.REPLY_TO_DISCUSSION_FAILED:
            return{...state, toastMessage: action.error, toastType: "FAILURE"}
        
        case actionTypes.RESET_TOAST: 
            return{ ...state, toastMessage: "", toastType: ""}
        default:
            return state
    }
}

export default toastReducer;