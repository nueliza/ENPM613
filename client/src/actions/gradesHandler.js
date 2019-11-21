/**
 * Contains all the service handlers for grades related actions
 */

import * as actionTypes from "./actionTypes";
import axios from "axios";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
axios.defaults.withCredentials = true


/**
 * gets the list of grades for a student
 * @param {Object} reqObject 
 */
export function getGradesList() {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_EXAM_LIST_STARTED
        });
        return axios.get(`/get_exams`)
        .then(response => {
            dispatch({
                type: actionTypes.GET_EXAM_LIST_SUCCESS,
                payload: response.data.exams
            })
        })
        .catch( error =>{
            dispatch({
                type: actionTypes.GET_EXAM_LIST_FAILED,
                error: error.response.data.message
            })
        })
    }
  }

  