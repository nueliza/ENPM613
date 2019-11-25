import * as actionTypes from "../actions/actionTypes";

const initialState = {
    loading: false
}

const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_STARTED:
        case actionTypes.REGISTERATION_STARTED:
        case actionTypes.LOGOUT_USER_STARTED:
        case actionTypes.CREATE_EXAM_STARTED:
        case actionTypes.SUBMIT_EXAM_STARTED:
        case actionTypes.DELETE_EXAM_STARTED:
        case actionTypes.GET_EXAM_LIST_STARTED:
        case actionTypes.GET_MODULE_LIST_STARTED:
        case actionTypes.GET_STUDENT_LIST_STARTED:
        case actionTypes.GET_DISCUSSION_LIST_STARTED:
        case actionTypes.GET_EXAM_STARTED:
        case actionTypes.GET_GRADES_LIST_STARTED:
        case actionTypes.GET_FC_SET_STARTED:
        case actionTypes.GET_FC_STARTED:
            return{ ...state, loading: true}
            
        case actionTypes.LOGIN_USER_FAILED:
        case actionTypes.LOGIN_USER_SUCESS:
        case actionTypes.REGISTRATION_FAILED:
        case actionTypes.REGISTRATION_SUCCESS: 
        case actionTypes.LOGOUT_USER_SUCESS:
        case actionTypes.LOGOUT_USER_FAILED:
        case actionTypes.CREATE_EXAM_FAILED:
        case actionTypes.CREATE_EXAM_SUCCESS:
        case actionTypes.SUBMIT_EXAM_FAILED:
        case actionTypes.SUBMIT_EXAM_SUCCESS:
        case actionTypes.DELETE_EXAM_SUCCESS:
        case actionTypes.DELETE_EXAM_FAILED:
        case actionTypes.GET_EXAM_LIST_FAILED:
        case actionTypes.GET_EXAM_LIST_SUCCESS:
        case actionTypes.GET_MODULE_LIST_SUCCESS:
        case actionTypes.GET_MODULE_LIST_FAILED:
        case actionTypes.GET_STUDENT_LIST_FAILED:
        case actionTypes.GET_STUDENT_LIST_SUCCESS:
        case actionTypes.GET_DISCUSSION_LIST_FAILED:
        case actionTypes.GET_DISCUSSION_LIST_SUCCESS:
        case actionTypes.GET_EXAM_SUCCESS:
        case actionTypes.GET_EXAM_FAILED:
        case actionTypes.GET_GRADES_LIST_SUCCESS:
        case actionTypes.GET_GRADES_LIST_FAILED:
        case actionTypes.GET_FC_SET_SUCCESS:
        case actionTypes.GET_FC_SET_FAILED:
        case actionTypes.GET_FC_SUCCESS:
        case actionTypes.GET_FC_FAILED:
            return{ ...state, loading: false}
        
        default:
            return state
    }
}

export default toastReducer;