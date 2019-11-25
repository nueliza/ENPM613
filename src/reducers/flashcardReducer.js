import * as actionTypes from "../actions/actionTypes";
import { stat } from "fs";

const initialState = {
    flashcardSets: {},
    flashcards: {}
}

const flashcardReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FC_SET_SUCCESS: 
            return{...state, flashcardSets: action.payload}
        case actionTypes.GET_FC_SUCCESS:
            return{...state, flashcards: action.payload}
        default:
            return state
    }
}

export default flashcardReducer;