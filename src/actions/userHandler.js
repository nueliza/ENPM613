/**
 * Contains service handlers for all user account
 */

import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as errors from "./errorMessage";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * Communicates with the login API, and logs in the user. Also stores the JWT token in the local storage
 * @param {Object} user 
 */

export function loginUser(user) {
    return async dispatch => {
        dispatch({
            type: actionTypes.LOGIN_USER_STARTED
        });
        return axios.post(`/login`, user)
        .then(result => {
            localStorage.setItem("token", result.data.token);
            dispatch({
                type: actionTypes.LOGIN_USER_SUCESS,
                payload: result.data
            })
        })
        .catch(error => {
            let errorMessage = "";
            if(error.response){
                errorMessage = "Invalid Credentials"
            }
            else{
                errorMessage = errors.Error_500
            }
            dispatch({
                type: actionTypes.LOGIN_USER_FAILED,
                error: errorMessage
            });
        })
    }
}

/**
 * Communicates with registerUser API, and registers the user. 
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
                let errorMessage = ""
                if(error.response){
                    errorMessage = error.response.data.message
                }
                else{
                    errorMessage = errors.Error_500
                }
                dispatch({
                    type: actionTypes.REGISTRATION_FAILED,
                    error: errorMessage
                });
            })
    }

}
/**
 * Communicates with the logout API, removes the JWT token from the local storage, and logs out the user
 */
export function logoutUser() {
    return async dispatch => {
        dispatch({
            type: actionTypes.LOGOUT_USER_STARTED
        });
        return axios.get(`/logout`)
            .then(payload => {
                localStorage.clear();
                dispatch({
                    type: actionTypes.LOGOUT_USER_SUCESS,
                    payload: "You've logged out sucessfully!"
                });
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.LOGOUT_USER_FAILED,
                    error: errors.Error_500
                });
            })
    }
}
