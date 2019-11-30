import * as actionTypes from "./actionTypes";

/**
 * Sets the module selected by the student in the store
 * @param {Integer} moduleId 
 * @param {String} moduleName 
 */
export const setSelectedModule = (moduleId, moduleName) =>{
    return{
        type: actionTypes.SET_SELECTED_MODULE,
        payload: {"mod_id": moduleId, "mod_name": moduleName}
    }

}


/**
 * Resets the toast message after the timeout
 */
export const resetToast = () =>{
    return{
        type: actionTypes.RESET_TOAST
    }
}



