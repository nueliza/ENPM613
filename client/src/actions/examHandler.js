/**
 * Contains all the service handlers for exam related actions
 */

import * as actionTypes from "./actionTypes";

const baseUrl = "https://get-sat-pro.herokuapp.com/api";

/**
 * getExamlist gets the list of exams for a particular module
 * @param {Object} reqObject 
 */
export function getExamList(reqObject) {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_EXAM_LIST_STARTED
        });
        return fetch(`${baseUrl}/get_exams/{mod_id}`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        })
        .then(response => response.json())
        .then(payload => {
            if (payload.Status === 200) {
                console.log("getExamList", payload);
                dispatch({
                    type: actionTypes.GET_EXAM_LIST_SUCCESS,
                    payload: payload
                })
            }
            else {
                console.log("getExamList", payload);
                dispatch({
                    type: actionTypes.GET_EXAM_LIST_FAILED,
                    error: payload.message
                })
            }
        })
    }
  }

  /**
   * submitExam submits the exam taken by the student
   * @param {Object} reqObject 
   */

  export function submitExam(reqObject) {
    return async dispatch => {
        dispatch({
            type: actionTypes.SUBMIT_EXAM_STARTED
        });
        return fetch(`${baseUrl}/get_exams/{mod_id}`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(reqObject)
        })
        .then(response => response.json())
        .then(payload => {
            if (payload.Status === 200) {
                console.log("submitExam", payload);
                dispatch({
                    type: actionTypes.SUBMIT_EXAM_SUCCESS,
                    payload: payload.message
                })
            }
            else {
                console.log("submitExam", payload);
                dispatch({
                    type: actionTypes.SUBMIT_EXAM_FAILED,
                    error: payload.message
                })
            }
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
        return fetch(`${baseUrl}/get_exams/{mod_id}`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(reqObject)
        })
        .then(response => response.json())
        .then(payload => {
            if (payload.Status === 200) {
                console.log("submitExam", payload);
                dispatch({
                    type: actionTypes.CREATE_EXAM_SUCCESS,
                    payload: payload.message
                })
            }
            else {
                console.log("submitExam", payload);
                dispatch({
                    type: actionTypes.CREATE_EXAM_FAILED,
                    error: payload.message
                })
            }
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
        return fetch(`${baseUrl}/get_exams/{mod_id}`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(reqObject)
        })
        .then(response => response.json())
        .then(payload => {
            if (payload.Status === 200) {
                console.log("submitExam", payload);
                dispatch({
                    type: actionTypes.DELETE_EXAM_SUCCESS,
                    payload: payload.message
                })
            }
            else {
                console.log("submitExam", payload);
                dispatch({
                    type: actionTypes.DELETE_EXAM_FAILED,
                    error: payload.message
                })
            }
        })
    }
  }

