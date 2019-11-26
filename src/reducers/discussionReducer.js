import * as actionTypes from "../actions/actionTypes";

const initialState = {
    selectedDiscussion: "",
    discussionList: {}
}

const discussionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DISCUSSION_LIST_SUCCESS:
            return {
                ...state, discussionList: action.payload
            };
        default:
            return state
    }
}

export default discussionReducer;