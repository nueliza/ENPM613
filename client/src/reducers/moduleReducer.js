const initialState = {
    selectedModule: '',
    userInfo: {},
    registerMessage: {error: false, message: ""}
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_MODULE':
            return {
                ...state, selectedModule: action.data
            };
        case 'LOGIN_USER':
            return {
                ...state, userInfo: action.data
            };
        case 'REGISTER_USER':
            return {
                ...state, registerMessage: action.data
            };
        default:
            return state
    }
}

export default moduleReducer;