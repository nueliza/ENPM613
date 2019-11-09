import * as actionTypes from "../actions/actionTypes";

const initialState = {
    loginPending: false,
    loginError: false,
    userInfo: {},
    selectedModule: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_STARTED: {
            return { ...state, loginPending: true }
        };
        case actionTypes.LOGIN_USER_FAILED: {
            return { ...state, loginError: action.error, loginPending: false }
        };
        case actionTypes.LOGIN_USER_SUCESS: {
            return { ...state, userInfo: action.payload.user_info, loginPending: false }
        };
        case actionTypes.SET_SELECTED_MODULE: {
            return { ...state, selectedModule: action.payload}
        };
        
        default:
            return state
    }
}

export default userReducer;