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

/* Sign Out Actions */
export const logoutSuccess = (data) =>{
    return{
        type: actionTypes.LOGOUT_USER_SUCESS,
        payload: data
    }
}

export const logoutStarted = () =>{
    return{
        type: actionTypes.LOGOUT_USER_STARTED,
    }
}

export const logoutFailed = (data) =>{
    return{
        type: actionTypes.LOGOUT_USER_FAILED,
        error: data
    }
}

// Get Students Actions
export const studentListStarted =() =>{
    return{
        type: actionTypes.GET_STUDENT_LIST_STARTED
    }
}

export const studentListFailed = (data) =>{
    return{
        type: actionTypes.GET_STUDENT_LIST_FAILED,
        error: data
    }
}

export const studentListSuccess = (data) =>{
    return{
        type: actionTypes.GET_STUDENT_LIST_SUCCESS,
        error: data
    }
}

// Toast Action
export const resetToast = () =>{
    return{
        type: actionTypes.RESET_TOAST
    }
}



