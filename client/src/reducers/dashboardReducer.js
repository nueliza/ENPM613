const initialState = {
    flashcardSets: {},
    examList: {},
    discussionList: {},
    gradesList: {},
    filesList: {}
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_FLASHCARD_SETS':
            return {
                ...state, flashcardSets: action.data
            };
        case 'GET_EXAM_LIST':
            return {
                ...state, examList: action.data
            };
        case 'GET_DISCUSSION_LIST':
            return {
                ...state, discussionList: action.data
            };
        case 'GET_GRADES':
            return {
                ...state, gradesList: action.data
            };
        case 'GET_FILES':
            return {
                ...state, filesList: action.data
            };
        default:
            return state
    }
}
export default dashboardReducer;