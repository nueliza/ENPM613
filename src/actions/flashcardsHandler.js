/**
 * Conatins all the service handlers for the flashcard
 */
import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as errors from "./errorMessage";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
axios.defaults.withCredentials = true;

 
/**
 * Communicates with the view_flashcard_sets API and gets the list of Flashcard sets
 * @param {Object} reqObject 
 */
export function getFlashcardSets(reqObject) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_FC_SET_STARTED
        });
        return axios.post(`/view_flashcard_sets`, reqObject)
        .then(result => {
            dispatch({
                type: actionTypes.GET_FC_SET_SUCCESS,
                payload: result.data.fc_set_list
            })
        })
        .catch(error =>{
            let errorMessage = "";
            if(error.response){
                errorMessage = error.response.data.message
            }
            else{
                errorMessage = errors.Error_500
            }
            dispatch({
                type: actionTypes.GET_FC_SET_FAILED,
                error: errorMessage
            });
        })
  }
}

/**
 * Communicates with view_flashcard_set API and gets the first flashcard in the selected flashcard set
 * @param {Object} reqObject 
 */
export function getFlashcard(reqObject) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_FC_STARTED
        });
        return axios.post(`/view_flashcard_set`, reqObject)
        .then(result => {
            dispatch({
                type: actionTypes.GET_FC_SUCCESS,
                payload: result.data.fc_data
            })
        })
        .catch(error =>{
            let errorMessage = "";
            if(error.response){
                errorMessage = error.response.data.message
            }
            else{
                errorMessage = errors.Error_500
            }
            dispatch({
                type: actionTypes.GET_FC_FAILED,
                error: errorMessage
            });
        })
  }
}

/**
 * Communicates with set_pref API and sets the preference set by the user.
 * @param {Object} reqObject 
 */
export function setPreference(reqObject) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    return async dispatch => {
        dispatch({
            type: actionTypes.SET_PREF_STARTED
        });
        return axios.post(`/set_pref`, reqObject)
        .then(result => {
            dispatch({
                type: actionTypes.SET_PREF_SUCCESS,
                payload: result.data.fc_data
            })
        })
        .catch(error =>{
            let errorMessage = "";
            if(error.response){
                errorMessage = error.response.data.message
            }
            else{
                errorMessage = errors.Error_500
            }
            dispatch({
                type: actionTypes.SET_PREF_FAILED,
                error: errorMessage
            });
        })
  }
}

/**
 * Communicates with the reset_flashcard_set API and resets a user's progress in a flashcard set
 * @param {Object} reqObject 
 */
export function resetProgress(reqObject) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    return async dispatch => {
        dispatch({
            type: actionTypes.SET_PREF_STARTED
        });
        return axios.post(`/reset_flashcard_set`, reqObject)
        .then(result => {
            dispatch({
                type: actionTypes.SET_PREF_SUCCESS,
                payload: "Flashcard Set progress reset successfully!!"
            })
        })
        .catch(error =>{
            let errorMessage = "";
            if(error.response){
                errorMessage = error.response.data.message
            }
            else{
                errorMessage = errors.Error_500
            }
            dispatch({
                type: actionTypes.SET_PREF_FAILED,
                error: errorMessage
            });
        })
  }
}



