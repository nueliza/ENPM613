import * as actions from "./actions";
import * as actionTypes from "./actionTypes";

const baseUrl = "https://get-sat-pro.herokuapp.com/";

export function loginUser(user) {
    return dispatch =>{
        dispatch(actions.loginStarted());
        return fetch(`${baseUrl}/login`, {
            method: "POST",
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(payload =>{
            if(payload.Status === 200){
                localStorage.setItem("token", payload.token)
                dispatch(actions.loginSuccess(payload));
            }
            else{
                dispatch(actions.loginFailed(payload.message));
            }
        })
    }
}

export function registerUser(registerData) {
    return dispatch =>{
        dispatch(actions.registrationStarted());
        //TODO service call for register
        return fetch(`${baseUrl}/register`, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(registerData)
        })
        .then(resp => resp.json())
        .then(payload =>{
            if(payload.Status === 200){
                dispatch(actions.registrationSuccess);
            }
            else{
                dispatch(actions.registrationFailed);
            }
        })
    }
    
}

export function logoutUser(user) {
    return dispatch =>{
        dispatch(actions.logoutStarted());
        return fetch(`${baseUrl}/logout`, {
            method: "GET",
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(payload =>{
            if(payload.Status === 200){
                dispatch(actions.logoutSuccess(payload.message));
            }
            else{
                dispatch(actions.logoutFailed(payload.message));
            }
        })
    }
}



export const setSelectedModule = (data) =>{
    return{
        type: actionTypes.SET_SELECTED_MODULE,
        payload: data
    }

}
