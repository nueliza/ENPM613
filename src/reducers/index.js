import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import moduleReducer from "./moduleReducer";

export default combineReducers({
    user : authenticationReducer ,
    modules : moduleReducer 
})