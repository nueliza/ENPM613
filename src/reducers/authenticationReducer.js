const initialState = {
userInfo: 'Loading'
}

const authenticationReducer = (state = initialState, action) => {
    console.log("HERE- reducers", action.data);
    switch (action.type) {
      case 'GET_DATA':
        return {
          ...state,userInfo: action.data }
      default:
        return state
    }
  }
  
  export default authenticationReducer;