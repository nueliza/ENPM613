import * as actionTypes from "../actions/actionTypes";

const initialState = {
    loading: false
}

const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_STARTED:
            return{ ...state, loading: true}
        case actionTypes.LOGIN_USER_FAILED:
            return{ ...state, loading: false}
        case actionTypes.LOGIN_USER_SUCESS: 
        return{ ...state, loading: false}
        default:
            return state
    }
}

export default toastReducer;