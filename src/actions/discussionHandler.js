/**
 * Contains all the service handlers for discussions
 */

import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as errors from "./errorMessage";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
axios.defaults.withCredentials = true

/**
 * createDiscussion starts a new discussion
 * @param {Object} reqObject 
 */
export function createDiscussion(reqObject) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
    return async dispatch => {
        dispatch({
            type: actionTypes.CREATE_DISCUSSION_STARTED
        });
        return axios.post(`/create_discussion`, reqObject)
        .then( response =>{
            dispatch({
                type: actionTypes.CREATE_DISCUSSION_SUCCESS,
                payload: "You've successfully created the discussion!"
            })
        })
        .catch( error =>{
            let errorMessage = "";
                if(error.response){
                    errorMessage = error.response.data.message
                }
                else{
                    errorMessage = errors.Error_500
                }
            dispatch({
                type: actionTypes.CREATE_DICUSSION_FAILED,
                error: errorMessage
            })
        })
    }
  }

  /**
   * Gets all the discussions in a module for a student
   */

  export function getDiscussionListStudent(reqObject) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_DISCUSSION_LIST_STARTED
        });
        return axios.post(`/get_discussions`, reqObject)
        .then(response => {
            dispatch({
                type: actionTypes.GET_DISCUSSION_LIST_SUCCESS,
                payload: response.data.discuss_list
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
                type: actionTypes.GET_DISCUSSION_LIST_FAILED,
                error: errorMessage
            })
        })
                
    }
  }

/**
   * Gets all the discussions in a module for a tutor
   */

  export function getDiscussionListTutor() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_DISCUSSION_LIST_STARTED
        });
        return axios.get(`/get_discussions`)
        .then(response => {
            dispatch({
                type: actionTypes.GET_DISCUSSION_LIST_SUCCESS,
                payload: response.data.discuss_list
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
                type: actionTypes.GET_DISCUSSION_LIST_FAILED,
                error: errorMessage
            })
        })
                
    }
  }

  /**
   * Gets a particular discussion
   */

  export function getDiscussion(reqObject) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_DISCUSSION_STARTED
        });
        return axios.post(`/view_discussion`, reqObject)
        .then(response => {
            dispatch({
                type: actionTypes.GET_DISCUSSION_SUCCESS,
                payload: response.data
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
                type: actionTypes.GET_DISCUSSION_FAILED,
                error: errorMessage
            })
        })
                
    }
  }

  /**
 * Deletes a particular Discussion
 * @param {Object} reqObject 
 */
export function deleteDiscussion(reqObject) {
    return async dispatch => {
        dispatch({
            type: actionTypes.DELETE_DISCUSSION_STARTED
        });
        return axios.post(`/delete`, reqObject)
            .then(response => {
                dispatch({
                    type: actionTypes.DELETE_DISCUSSION_SUCCESS,
                    payload: "You've successfully deleted the discussion!"
                })
            })
            .catch(error => {
                let errorMessage = "";
                if(error.response){
                    errorMessage = error.response.data.message
                }
                else{
                    errorMessage = errors.Error_500
                }
                dispatch({
                    type: actionTypes.DELETE_DISCUSSION_FAILED,
                    error: errorMessage
                })
            })
    }
}


export function replyToDiscussion(reqObject) {
    return async dispatch => {
        dispatch({
            type: actionTypes.REPLY_TO_DISCUSSION_STARTED
        });
        return axios.post(`/create_discuss_thread`, reqObject)
            .then(response => {
                dispatch({
                    type: actionTypes.REPLY_TO_DISCUSSION_SUCCESS,
                    payload: response.data.message
                })
            })
            .catch(error => {
                let errorMessage = "";
                if(error.response){
                    errorMessage = error.response.data.message
                }
                else{
                    errorMessage = errors.Error_500
                }
                dispatch({
                    type: actionTypes.REPLY_TO_DISCUSSION_FAILED,
                    error: errorMessage
                })
            })
    }
}
  