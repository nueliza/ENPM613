export function setSelectedModule(payload) {
    return{
        type: 'SET_SELECTED_MODULE',
        data: payload
    }
}

export function loginUser(user) {
    return dispatch =>{
        return fetch("https://get-sat-pro.herokuapp.com/login", {
            method: "POST",
            headers:{
                'Content-Type':'application/json',
                'Accept': 'aaplication/json',
            },
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(err =>{
            console.log("Eror", err);
        })
        .then(payload =>{
            console.log("before Dispatch", payload);
            if(payload.status === 200){
                console.log("before Dispatch", payload);
                localStorage.setItem("token", payload.token)
                dispatch({
                    type: 'LOGIN_USER',
                    data: payload
                })
            }
        })
    }
}

export function registerUser(payload) {
    //TODO: service call to register user
    return{
        type: 'REGISTER_USER',
        data: payload // will change to response
    }
    
}

