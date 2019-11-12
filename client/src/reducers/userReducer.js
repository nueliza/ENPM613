import * as actionTypes from "../actions/actionTypes";

const initialState = {
    loginPending: false,
    loginError: "",
    userInfo: {},
    selectedModule: "",
    logoutSuccess : {},
    logoutStarted: false,
    loginFailed: {},
    registrationPending: false,
    registrationSuccess: "",
    registrationFailed: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_STARTED: 
            return { ...state, loginPending: true }
        case actionTypes.LOGIN_USER_FAILED: 
            return { ...state, loginError: action.error, loginPending: false }
        case actionTypes.LOGIN_USER_SUCESS: 
            return { ...state, userInfo: action.payload.user_info, loginPending: false }
        case actionTypes.SET_SELECTED_MODULE: 
            return { ...state, selectedModule: action.payload}
        case actionTypes.LOGOUT_USER_STARTED:
            return { ...state, logoutPending: true}
        case actionTypes.LOGOUT_USER_SUCESS: 
            return { ...state, logoutSuccess: action.payload, logoutPending: false}
        case actionTypes.LOGOUT_USER_FAILED: 
            return { ...state, logoutFailed: action.payload, logoutPending: false}
        case actionTypes.REGISTERATION_STARTED:
            return{...state, registrationPending: true}
        case actionTypes.REGISTRATION_FAILED: 
            return{...state, registrationFailed: action.payload, registrationPending: false}
        case actionTypes.REGISTRATION_SUCCESS:
            return {...state, registrationSuccess: action.payload, registrationPending: false}
        default:
            return state
    }
}

export default userReducer;