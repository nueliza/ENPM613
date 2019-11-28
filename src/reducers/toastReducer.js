import * as actionTypes from "../actions/actionTypes";

const initialState = {
    toastMessage: "",
    toastType: ""
}

const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        /**Success scenarios */
        //user handler
        case actionTypes.LOGIN_USER_SUCESS:
            return{ ...state, toastMessage: "You've logged in successfully!!", toastType:"SUCCESS"}
        case actionTypes.REGISTRATION_SUCCESS:
        case actionTypes.LOGOUT_USER_SUCESS:
        //exam hanlder
        case actionTypes.CREATE_EXAM_SUCCESS:
        case actionTypes.DELETE_EXAM_SUCCESS:
        //discussion handler
        case actionTypes.DELETE_DISCUSSION_SUCCESS:
        //case actionTypes.REPLY_TO_DISCUSSION_SUCCESS:
        case actionTypes.CREATE_DISCUSSION_SUCCESS:
        //flashcards handler
        case actionTypes.RESET_PREF_SUCCESS:
            return{...state, toastMessage: action.payload, toastType: "SUCCESS"}

        /**Failure scenarios */
        //user handler
        case actionTypes.LOGOUT_USER_FAILED:
        case actionTypes.REGISTRATION_FAILED:
        //student handler
        case actionTypes.GET_STUDENT_LIST_FAILED:
        case actionTypes.GET_MODULE_LIST_FAILED:
        //exam hanlder
        case actionTypes.GET_EXAM_LIST_FAILED:
        case actionTypes.DELETE_EXAM_FAILED:
        case actionTypes.CREATE_EXAM_FAILED:
        case actionTypes.SUBMIT_EXAM_FAILED:
        case actionTypes.GET_EXAM_FAILED:
        case actionTypes.GET_GRADES_LIST_FAILED:
        //discussion handler
        case actionTypes.CREATE_DICUSSION_FAILED:
        case actionTypes.GET_DISCUSSION_LIST_FAILED:
        case actionTypes.REPLY_TO_DISCUSSION_FAILED:
        case actionTypes.GET_DISCUSSION_FAILED:
        case actionTypes.DELETE_DISCUSSION_FAILED:
        //flashcards handler
        case actionTypes.RESET_PREF_FAILED:
        case actionTypes.GET_FC_SET_FAILED:
        case actionTypes.GET_FC_FAILED:
        case actionTypes.SET_PREF_FAILED:
            return{...state, toastMessage: action.error, toastType: "FAILURE"}
        
        case actionTypes.RESET_TOAST: 
            return{ ...state, toastMessage: "", toastType: ""}
        default:
            return state
    }
}

export default toastReducer;