import * as actionTypes from "../actions/actionTypes";

const initialState = {
    studentList: {}
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_STUDENT_LIST_SUCCESS: {
            return {...state, studentList: action.payload}
        }

           
        default:
            return state
    }
}

export default studentReducer;