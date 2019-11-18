import * as actionTypes from "../actions/actionTypes";

const initialState = {
    loginError: "",
    userInfo: {},
    selectedModule: "",
    logoutFailed : "",
    registrationError: "",
    moduleList: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_FAILED: 
            return { ...state, loginError: action.error}
        case actionTypes.LOGIN_USER_SUCESS: 
            return { ...state, userInfo: action.payload.user_info}
        case actionTypes.SET_SELECTED_MODULE: 
            return { ...state, selectedModule: action.payload}
        case actionTypes.LOGOUT_USER_FAILED: 
            return { ...state, logoutFailed: action.payload}
        case actionTypes.REGISTRATION_FAILED: 
            return{...state, registrationError: action.error}
        case actionTypes.GET_MODULE_LIST_SUCCESS: 
            return{...state, moduleList: action.payload}
        case actionTypes.LOGOUT_USER_SUCESS:
            return {...state, userInfo: {}}
        default:
            return state
    }
}

export default userReducer;