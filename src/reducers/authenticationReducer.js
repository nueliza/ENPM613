const initialState = {
data: 'Loading'
}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_DATA':
        return {
          ...state,data: action.data }
      default:
        return state
    }
  }
  
  export default authenticationReducer;