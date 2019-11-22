import { combineReducers } from 'redux';
import userReducer from './userReducer';
import examReducer from "./examReducer";
import discussionReducer from "./discussionReducer";
import toastReducer from "./toastReducer";
import loaderReducer from "./loaderReducer";
import studentReducer from './studentReducer';

export default combineReducers({
    user : userReducer ,
    exam : examReducer,
    discussion: discussionReducer,
    toast: toastReducer,
    loader : loaderReducer,
    student : studentReducer
})