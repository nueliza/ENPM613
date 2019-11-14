import * as actionTypes from "../actions/actionTypes";

const initialState = {
    loading: false
}

const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_STARTED:
            return{ ...state, loading: true}
        case actionTypes.LOGIN_USER_FAILED:
        case actionTypes.LOGIN_USER_SUCESS: 
            return{ ...state, loading: false}
        case actionTypes.REGISTERATION_STARTED:
            return{ ...state, loading: true}
        case actionTypes.REGISTRATION_FAILED:
        case actionTypes.REGISTRATION_SUCCESS: 
            return{ ...state, loading: false}
        case actionTypes.LOGOUT_USER_STARTED:
            return{ ...state, loading: true}
        case actionTypes.LOGOUT_USER_SUCESS:
        case actionTypes.LOGIN_USER_FAILED:
            return{ ...state, loading: false}
        default:
            return state
    }
}

export default toastReducer;