import * as actions from "./actions";
import * as actionTypes from "./actionTypes";

const baseUrl = "https://get-sat-pro.herokuapp.com";

export function loginUser(user) {
    return async dispatch => {
        dispatch(actions.loginStarted());
        return fetch(`${baseUrl}/login`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(payload => {
            if (payload.Status === 200) {
                localStorage.setItem("token", payload.token);
                dispatch(actions.loginSuccess(payload));
            }
            else {
                dispatch(actions.loginFailed(payload.message));
            }
        })
    }
  }


export function registerUser(registerData) {
    return async dispatch =>{
        dispatch(actions.registrationStarted());
        //TODO service call for register
        const resp = await fetch(`${baseUrl}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(registerData)
        });
        const payload = await resp.json();
        if (payload.Status === 200) {
            dispatch(actions.registrationSuccess(payload.message));
        }
        else {
            dispatch(actions.registrationFailed(payload.message));
        }
    }
    
}

export function logoutUser(user) {
    return async dispatch => {
        dispatch(actions.logoutStarted());
        return fetch(`${baseUrl}/logout`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then(response => response.json())
        .then(payload => {
            if (payload.Status === 200) {
                localStorage.removeItem("token", payload.token);
                dispatch(actions.logoutSuccess(payload.message));
            }
            else {
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
