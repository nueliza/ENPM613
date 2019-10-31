const initialState = {
    selectedExam: {},
    deleteExamMessage: {error: false, message: ""},
    submitExamMessage: {error: false, message: ""},
    createExamMessage: {error: false, message: ""}
}

const examReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_EXAM':
            return {
                ...state, selectedExam: action.data
            };
        case 'DELETE_EXAM':
            return {
                ...state, deleteExamMessage: action.data
            };
        case 'SUBMIT_EXAM':
            return {
                ...state, submitExamMessage: action.data
            };
        case 'CREATE_EXAM':
            return {
                ...state, createExamMessage: action.data
            };
        default:
            return state
    }
}

export default examReducer;