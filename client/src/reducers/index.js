import { combineReducers } from 'redux';
import userReducer from './userReducer';
import moduleReducer from "./moduleReducer";
import examReducer from "./examReducer";
import discussionReducer from "./discussionReducer";
import dashboardReducer from "./dashboardReducer";
import toastReducer from "./toastReducer";

export default combineReducers({
    user : userReducer ,
    modules : moduleReducer ,
    exam : examReducer,
    discussion: discussionReducer,
    dashboard: dashboardReducer,
    toast: toastReducer
})