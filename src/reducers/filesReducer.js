import * as actionTypes from "../actions/actionTypes";

const initialState = {
    files: {},
}

const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FILES_SUCCESS: 
            return{...state, files: action.payload}
        default:
            return state
    }
}

export default filesReducer;