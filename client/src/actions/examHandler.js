/**
 * Contains all the service handlers for exam related actions
 */

import * as actionTypes from "./actionTypes";
import axios from "axios";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
axios.defaults.withCredentials = true

const baseUrl = "https://get-sat-pro.herokuapp.com/api";

/**
 * getExamlist gets the list of exams for a particular module
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
        .catch( error =>{
            dispatch({
                type: actionTypes.GET_EXAM_LIST_FAILED,
                error: error.response.data.message
            })
        })
    }
  }

  /**
 * getExamlist gets the list of exams for a particular module
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
        .catch( error =>{
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
        .then( response => {
            dispatch({
                type: actionTypes.CREATE_EXAM_SUCCESS,
                payload: response.data.message
            })
        })
        .catch( error =>{
            dispatch({
                type: actionTypes.CREATE_EXAM_FAILED,
                error: error.response.data.message
            })
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
                dispatch({
                    type: actionTypes.SUBMIT_EXAM_SUCCESS,
                    payload: payload.message
                })
            }
            else {
                dispatch({
                    type: actionTypes.SUBMIT_EXAM_FAILED,
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
        return axios.post(`/delete`, reqObject)
        .then(response => {
            dispatch({
                type: actionTypes.DELETE_EXAM_SUCCESS,
                payload: response.data.message
            })
        })
        .catch( error => {
            console.log(error)
            dispatch({
                type: actionTypes.DELETE_EXAM_FAILED,
                error: error.response.data.message
            })
        })
    }
  }

  /**
 * getExamlist gets a particular exam
 * @param {Object} reqObject 
 */
export function getExam(reqObject) {
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
            body: JSON.stringify(reqObject)
        })
        .then(response => response.json())
        .then(payload => {
            if (payload.Status === 200) {
                dispatch({
                    type: actionTypes.GET_EXAM_LIST_SUCCESS,
                    payload: payload
                })
            }
            else {
                dispatch({
                    type: actionTypes.GET_EXAM_LIST_FAILED,
                    error: payload.message
                })
            }
        })
    }
  }


