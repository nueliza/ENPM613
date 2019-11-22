/**
 * Contains service handlers for all user account actions
 */

import * as actionTypes from "./actionTypes";
import axios from "axios";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
//axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
//axios.defaults.withCredentials = true;

export let token=  "";
/**
 * loginUser communicates with the login API, and logs in the user. Also stores the JWT token in the local storage
 * @param {Object} user 
 */
export function loginUser(user) {

    // return async dispatch =>{
    //     return axios.get(`${baseUrl}/logout`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //         }
    //     })
    // }

    return async dispatch => {
        dispatch({
            type: actionTypes.LOGIN_USER_STARTED
        });
        return axios.post(`/login`, user)
        .then(result => {
            localStorage.setItem("token", result.data.token);
            console.log("token",sessionStorage.getItem("token"))
            dispatch({
                type: actionTypes.LOGIN_USER_SUCESS,
                payload: result.data
            })
        })
        .catch(error => {
            dispatch({
                type: actionTypes.LOGIN_USER_FAILED,
                error: error.response.data.message
            });
        })
    }
}

/**
 * registerUser communicated with registerUser API, registers the user. 
 * @param {Object} registerData 
 */
export function registerUser(registerData) {
    return async dispatch => {
        dispatch({
            type: actionTypes.REGISTERATION_STARTED
        });
        return axios.post(`/register`, registerData)
            .then(result => {
                dispatch({
                    type: actionTypes.REGISTRATION_SUCCESS,
                    payload: result.data.message
                })
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.REGISTRATION_FAILED,
                    error: error.response.message
                });
            })
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
        return axios.get(`/logout`)
            .then(payload => {
                localStorage.removeItem("token", payload.token);
                dispatch({
                    type: actionTypes.LOGOUT_USER_SUCESS,
                    payload: payload.data.message
                });
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.LOGOUT_USER_FAILED,
                    error: error.response.data.message
                });
            })
    }
}
