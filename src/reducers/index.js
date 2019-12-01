import { combineReducers } from 'redux';
import userReducer from './userReducer';
import examReducer from "./examReducer";
import discussionReducer from "./discussionReducer";
import toastReducer from "./toastReducer";
import loaderReducer from "./loaderReducer";
import studentReducer from './studentReducer';
import flashcardReducer from './flashcardReducer';
import filesReducer from "./filesReducer";

import * as actionTypes from "../actions/actionTypes";

//Persist State
const appReducer = combineReducers({
    user : userReducer ,
    exam : examReducer,
    discussion: discussionReducer,
    toast: toastReducer,
    loader : loaderReducer,
    student : studentReducer,
    flashcards: flashcardReducer,
    files: filesReducer
  })
  
const rootReducer = (state, action) => {
    //On successful logout reset state
    if (action.type === actionTypes.LOGOUT_USER_SUCESS) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;