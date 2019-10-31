const initialState = {
    selectedModule: ''
}

const authenticationReducer = (state = initialState, action) => {
switch (action.type) {
    case 'SET_SELECTED_MODULE':
    return {
        ...state,selectedModule: action.data }
    default:
    return state
    }
}

export default authenticationReducer;