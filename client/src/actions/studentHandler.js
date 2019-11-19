/**
 * Conatins all the service handlers for the student related actions
 */
import * as actionTypes from "./actionTypes";
import axios from "axios";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
axios.defaults.withCredentials = true


/**
 * gets the list of students after communicating with the get_students API
 */

//credentials: 'include' sends the cookie along with request. fetch by default does not inlude cookies
export function getStudentList() {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_STUDENT_LIST_STARTED
        });
        return axios.get(`/get_students`)
        .then(result => {
            dispatch({
                type: actionTypes.GET_STUDENT_LIST_SUCCESS,
                payload: result.data.students
            })
        })
        .catch(error =>{
            dispatch({
                type: actionTypes.GET_STUDENT_LIST_SUCCESS,
                error: error.response.data.message
            });
        })
  }
}

export function getModulesList(reqObject) {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_MODULE_LIST_STARTED
        })
        return axios.post(`get_modules`, reqObject)
        .then(response => {
            dispatch({
                type: actionTypes.GET_MODULE_LIST_SUCCESS,
                payload: response.data.mod_list
            });
        })
        .catch( error =>{
            dispatch({
                type: actionTypes.GET_MODULE_LIST_FAILED,
                error: error.response.data.message
            });
        })
    }
}

