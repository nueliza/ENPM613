import * as actionTypes from "../actions/actionTypes";

const initialState = {
    examList: {},
    createExamError: ""
}

const examReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EXAM_LIST_SUCCESS: 
            return{...state, examList: action.payload}
        case actionTypes.CREATE_EXAM_FAILED:
            return{...state, createExamError: action.error}
        default:
            return state
    }
}

export default examReducer;