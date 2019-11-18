/**
 * Contains all the service handlers for discussion related actions
 */

import * as actionTypes from "./actionTypes";

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
        return fetch(`${baseUrl}/create_discussion`,{
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
                    type: actionTypes.CREATE_DISCUSSION_SUCCESS,
                    payload: payload.message
                })
            }
            else {
                dispatch({
                    type: actionTypes.CREATE_DICUSSION_FAILED,
                    error: payload.message
                })
            }
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

  