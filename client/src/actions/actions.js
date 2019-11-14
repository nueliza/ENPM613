import * as actionTypes from "./actionTypes";

// set the module selected by the student in the store
export const setSelectedModule = (data) =>{
    return{
        type: actionTypes.SET_SELECTED_MODULE,
        payload: data
    }

}

// Reset the toast message after the timeout
export const resetToast = () =>{
    return{
        type: actionTypes.RESET_TOAST
    }
}



