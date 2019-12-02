import * as actionTypes from "../actions/actionTypes";

const initialState = {
    studentList: {},
    tutorList: {},
    selectedStudent: {}
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
           
        default:
            return state
    }
}

export default studentReducer;