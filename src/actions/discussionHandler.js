/**
 * Contains all the service handlers for discussion related actions
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
 * createDiscussion starts a new discussion
 * @param {Object} reqObject 
 */
export function createDiscussion(reqObject) {
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
   * gets all the discussions in a module
   */

  export function getDiscussionList() {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_DISCUSSION_LIST_STARTED
        });
        return fetch(`${baseUrl}/get_discussions/{mod_id}`,{
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
                dispatch({
                    type: actionTypes.GET_DISCUSSION_LIST_SUCCESS,
                    payload: payload
                })
            }
            else {
                dispatch({
                    type: actionTypes.GET_DISCUSSION_LIST_FAILED,
                    error: payload.message
                })
            }
        })
    }
  }

  