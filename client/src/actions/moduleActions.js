export function setSelectedModule(payload) {
    return{
        type: 'SET_SELECTED_MODULE',
        data: payload
    }
}

export function loginUser(payload) {
    //TODO: service call to login user
    return{
        type: 'LOGIN_USER',
        data: payload //will change to response
    }
}

export function registerUser(payload) {
    //TODO: service call to register user
    return{
        type: 'REGISTER_USER',
        data: payload // will change to response
    }
    
}

