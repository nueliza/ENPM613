/**
 * Conatins all the service handlers for the flashcard related actions
 */
import * as actionTypes from "./actionTypes";
import axios from "axios";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
axios.defaults.withCredentials = false


/**
 * gets the list of students after communicating with the get_students API
 */

//credentials: 'include' sends the cookie along with request. fetch by default does not inlude cookies
export function getFlashcardSets(reqObject) {
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
            console.log("error", error)
            dispatch({
                type: actionTypes.GET_FC_SET_FAILED,
                error: error.response.data.message
            });
        })
  }
}


