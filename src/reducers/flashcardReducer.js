import * as actionTypes from "../actions/actionTypes";

const initialState = {
    flashcardSets: {},
    flashcard: ""
}

const flashcardReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FC_SET_SUCCESS: 
            return{...state, flashcardSets: action.payload}
        case actionTypes.GET_FC_SUCCESS:
            return{...state, flashcard: action.payload}
        case actionTypes.SET_PREF_SUCCESS:
            return{...state, flashcard: action.payload}
        default:
            return state
    }
}

export default flashcardReducer;