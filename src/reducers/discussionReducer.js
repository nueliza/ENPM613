const initialState = {
    selectedDiscussion: {},
    replytToDiscussionMessage: {error: false, message: ""},
    deleteDiscussionMessage: {error: false, message: ""},
    deleteReplytToDiscussionMessage: {error: false, message: ""},
    createDiscussionMessage: {error: false, message: ""}
}

const discussionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DISCUSSION':
            return {
                ...state, selectedDiscussion: action.data
            };
        case 'REPLY_TO_DISCUSSION':
            return {
                ...state, replytToDiscussionMessage: action.data
            };
        case 'DELETE_DISCUSSION':
            return {
                ...state, deleteDiscussionMessage: action.data
            };
        case 'DELETE_REPLY_TO_DISCUSSION':
            return {
                ...state, deleteReplytToDiscussionMessage: action.data
            };
        case 'CREATE_DISCUSSION':
            return {
                ...state, createDiscussionMessage: action.data
            };
        default:
            return state
    }
}

export default discussionReducer;