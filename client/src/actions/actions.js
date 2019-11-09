import * as actionTypes from "./actionTypes";
import { setSelectedModule } from "./userActions";

/* Login Actions */
export const loginSuccess = (data) =>{
    return{
        type: actionTypes.LOGIN_USER_SUCESS,
        payload: data
    }
}

export const loginStarted = () =>{
    return{
        type: actionTypes.LOGIN_USER_STARTED,
    }
}

export const loginFailed = (data) =>{
    return{
        type: actionTypes.LOGIN_USER_FAILED,
        error: data
    }
}

/* Registration Actions */

export const registrationStarted = () =>{
    return{
        type: actionTypes.REGISTERATION_STARTED,
    }
}

export const registrationSuccess = (data) =>{
    return{
        tyep: actionTypes.REGISTRATION_SUCCESS,
        payload: data
    }
}

export const registrationFailed = (data) =>{
    return{
        type: actionTypes.REGISTRATION_FAILED,
        payload: data
    }
}


