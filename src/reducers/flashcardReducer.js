import * as actionTypes from "../actions/actionTypes";

const initialState = {
    flashcardSets: {}
}

const flashcardReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FC_SET_SUCCESS: 
            return{...state, flashcardSets: action.payload}
        default:
            return state
    }
}

export default flashcardReducer;