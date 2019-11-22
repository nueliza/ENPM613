import * as actionTypes from "./actionTypes";

// set the module selected by the student in the store
export const setSelectedModule = (moduleId, moduleName) =>{
    return{
        type: actionTypes.SET_SELECTED_MODULE,
        payload: {"mod_id": moduleId, "mod_name": moduleName}
    }

}

// Reset the toast message after the timeout
export const resetToast = () =>{
    return{
        type: actionTypes.RESET_TOAST
    }
}

//Set the toast message
export const setToast = () =>{
    return{
        //type: actionTypes.RESET_TOAST
    }
}



