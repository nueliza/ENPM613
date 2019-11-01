import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import moduleReducer from "./moduleReducer";
import examReducer from "./examReducer";
import discussionReducer from "./discussionReducer";
import dashboardReducer from "./dashboardReducer";

export default combineReducers({
    user : authenticationReducer ,
    modules : moduleReducer ,
    exam : examReducer,
    discussion: discussionReducer,
    dashboard: dashboardReducer
})