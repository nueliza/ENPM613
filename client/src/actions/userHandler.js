/**
 * Contains service handlers for all user account actions
 */

import * as actionTypes from "./actionTypes";

const baseUrl = "https://get-sat-pro.herokuapp.com/api";

/**
 * loginUser communicates with the login API, and logs in the user. Also stores the JWT token in the local storage
 * @param {Object} user 
 */
export function loginUser(user) {
    return async dispatch => {
        dispatch({
            type: actionTypes.LOGIN_USER_STARTED
        });
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
                dispatch({
                    type: actionTypes.LOGIN_USER_SUCESS,
                    payload: payload
                });
            }
            else {
                dispatch({
                    type: actionTypes.LOGIN_USER_FAILED,
                    error: payload.message
                });
            }
        })
    }
  }

/**
 * registerUser communicated with registerUser API, registers the user. 
 * @param {Object} registerData 
 */
export function registerUser(registerData) {
    return async dispatch =>{
        dispatch({
            type: actionTypes.REGISTERATION_STARTED
        });
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
            dispatch({
                type: actionTypes.REGISTRATION_SUCCESS,
                payload: payload.message
            });
        }
        else {
            dispatch({
                type: actionTypes.REGISTRATION_FAILED,
                error: payload.message
            });
        }
    }
    
}
/**
 * logoutUser communicates with the logout API and removes the JWT token from the local storage
 */
export function logoutUser() {
    return async dispatch => {
        dispatch({
            type: actionTypes.LOGOUT_USER_STARTED
        });
        return fetch(`${baseUrl}/logout`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then(response => response.json())
        .then(payload => {
            if (payload.Status === 200) {
                localStorage.removeItem("token", payload.token);
                dispatch({
                    type: actionTypes.LOGOUT_USER_SUCESS,
                    payload: payload.message
                });
            }
            else {
                dispatch({
                    type: actionTypes.LOGOUT_USER_FAILED,
                    error: payload.message
                });
            }
        })
    }
  }

  export function getModulesList(reqObject) {
      console.log("HERE", reqObject)
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_MODULE_LIST_STARTED
        })
        return fetch(`${baseUrl}/get_modules`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(reqObject)
        })
        .then(response => response.json())
        .then(payload => {
            console.log("HERE")
            if (payload.Status === 200) {
                dispatch({
                    type: actionTypes.GET_MODULE_LIST_SUCCESS,
                    payload: payload
                });
            }
            else {
                dispatch({
                    type: actionTypes.GET_MODULE_LIST_FAILED,
                    error: payload.message
                });
            }
        })
    }
  }

