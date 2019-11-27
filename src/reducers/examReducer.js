import * as actionTypes from "../actions/actionTypes";

const initialState = {
    examList: {},
    createExamError: "",
    selectedExam: {},
    selectedExamName:"",
    selectedExamId:"",
    gradesList: {},
    selectedExamScore: "",
}

const examReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EXAM_LIST_SUCCESS: 
            return{...state, examList: action.payload}
        case actionTypes.CREATE_EXAM_FAILED:
            return{...state, createExamError: action.error}
        case actionTypes.GET_EXAM_SUCCESS:
            return{...state, selectedExam: action.payload.questions, 
                selectedExamName: action.payload.exam_name, 
                selectedExamScore: action.payload.grade}
        case actionTypes.GET_EXAM_STARTED:
            return{...state, selectedExamId: action.payload}
        case actionTypes.GET_GRADES_LIST_SUCCESS:
            return{...state, gradesList: action.payload}
        default:
            return state
    }
}

export default examReducer;