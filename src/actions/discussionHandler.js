/**
 * Contains all the service handlers for discussions
 */

import * as actionTypes from "./actionTypes";
import axios from "axios";

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
                payload: response.data.message
            })
        })
        .catch( error =>{
            dispatch({
                type: actionTypes.CREATE_DICUSSION_FAILED,
                error: error.response.data.message
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
            dispatch({
                type: actionTypes.GET_DISCUSSION_LIST_FAILED,
                error: error.response.data.message
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
            dispatch({
                type: actionTypes.GET_DISCUSSION_LIST_FAILED,
                error: error.response.data.message
            })
        })
                
    }
  }

  