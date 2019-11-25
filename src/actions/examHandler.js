/**
 * Contains all the service handlers for exam
 */

import * as actionTypes from "./actionTypes";
import axios from "axios";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
axios.defaults.withCredentials = true


/**
 * Gets the list of exams for a particular module for a tutor
 * @param {Object} reqObject 
 */
export function getExamListTutor() {
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
            .catch(error => {
                dispatch({
                    type: actionTypes.GET_EXAM_LIST_FAILED,
                    error: error.response.data.message
                })
            })
    }
}

/**
* getExamlist gets the list of exams for a particular module for a student
* @param {Object} reqObject 
*/
export function getExamListStudent(reqObject) {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_EXAM_LIST_STARTED
        });
        return axios.post(`/get_exams`, reqObject)
            .then(response => {
                dispatch({
                    type: actionTypes.GET_EXAM_LIST_SUCCESS,
                    payload: response.data.exams
                })
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.GET_EXAM_LIST_FAILED,
                    error: error.response.data.message
                })
            })
    }
}



/**
 * Creates a new exam
 * @param {Object} reqObject 
 */
export function createExam(reqObject) {
    return async dispatch => {
        dispatch({
            type: actionTypes.CREATE_EXAM_STARTED
        });
        return axios.post(`/create_exam`, reqObject)
            .then(response => {
                dispatch({
                    type: actionTypes.CREATE_EXAM_SUCCESS,
                    payload: response.data.message
                })
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.CREATE_EXAM_FAILED,
                    error: error.response.data.message
                })
            })
    }
}

/**
 * Submits the exam taken by the student
 * @param {Object} reqObject 
 */

export function submitExam(reqObject) {
    return async dispatch => {
        dispatch({
            type: actionTypes.SUBMIT_EXAM_STARTED
        });
        return axios.post(`submit_exam`, reqObject)
        .then(response => {
            dispatch({
                type: actionTypes.SUBMIT_EXAM_SUCCESS,
                payload: response.data.message
            })
        })
        .catch( error =>{
            dispatch({
                type: actionTypes.SUBMIT_EXAM_FAILED,
                error: error.response.data.message
            })
        })
    }
}



/**
 * Deletes a particular Exam
 * @param {Object} reqObject 
 */
export function deleteExam(reqObject) {
    return async dispatch => {
        dispatch({
            type: actionTypes.DELETE_EXAM_STARTED
        });
        return axios.post(`/delete`, reqObject)
            .then(response => {
                dispatch({
                    type: actionTypes.DELETE_EXAM_SUCCESS,
                    payload: response.data.message
                })
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: actionTypes.DELETE_EXAM_FAILED,
                    error: error.response.data.message
                })
            })
    }
}

/**
* Gets the details of a particular exam
* @param {Object} reqObject 
*/
export function getExam(reqObject) {
    console.log("ExamHandler", reqObject)
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_EXAM_STARTED,
            payload: reqObject.exam_id
        });
        return axios.post(`view_exam`, reqObject)
            .then(response => {
                dispatch({
                    type: actionTypes.GET_EXAM_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.GET_EXAM_FAILED,
                    error: error.response.data.message
                })
            })
    }
}

/**
 * Gets the list of grades for a particular module
 * @param {Object} reqObject 
 */
export function getGradesList(reqObject) {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_GRADES_LIST_STARTED
        });
        return axios.post(`/view_grades`, reqObject)
            .then(response => {
                dispatch({
                    type: actionTypes.GET_GRADES_LIST_SUCCESS,
                    payload: response.data.exams
                })
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.GET_GRADES_LIST_FAILED,
                    error: error.response.data.message
                })
            })
    }
}
