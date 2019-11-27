/**
 * Conatins all the service handlers for the student
 */
import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as errors from "./errorMessage";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;


/**
 * Gets the list of all students
 */

export function getStudentList() {
    axios.defaults.withCredentials = true;
    console.log("token2",sessionStorage.getItem("token"))
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
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
            let errorMessage ="";
            if(error.response){
                errorMessage = error.response.data.message
            }
            else{
                errorMessage = errors.Error_500
            }
            dispatch({
                type: actionTypes.GET_STUDENT_LIST_FAILED,
                error: errorMessage
            });
        })
  }
}

/**
 * Gets the list of modules available to students
 */

export function getModulesList() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_MODULE_LIST_STARTED
        })
        return axios.get(`get_modules`)
        .then(response => {
            dispatch({
                type: actionTypes.GET_MODULE_LIST_SUCCESS,
                payload: response.data.mod_list
            });
        })
        .catch( error =>{
            let errorMessage ="";
            if(error.response){
                errorMessage = error.response.data.message
            }
            else{
                errorMessage = errors.Error_500
            }
            dispatch({
                type: actionTypes.GET_MODULE_LIST_FAILED,
                error: errorMessage
            });
        })
    }
}

