import * as actionTypes from "../actions/actionTypes";

const initialState = {
    studentList: {},
    tutorList: {},
    selectedStudent: "",
    deleteSucess: false
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_STUDENT_LIST_SUCCESS: {
            return {...state, studentList: action.payload}
        }
        case actionTypes.GET_TUTOR_LIST_SUCCESS: {
            return {...state, tutorList: action.payload}
        }
        case actionTypes.GET_USER_SUCCESS: {
            return {...state, selectedStudent: action.payload}
        }
        case actionTypes.DELETE_STUDENT_SUCCESS:
        case actionTypes.RESET_STUDENT:
        case actionTypes.DELETE_STUDENT_FAILED:
        {
            return {...state, selectedStudent: ""}
        }
        default:
            return state
    }
}

export default studentReducer;