/**
 * Conatins all the service handlers for the student related actions
 */
import * as actionTypes from "./actionTypes";
import { student_list_response } from "../fakeData";
const baseUrl = "https://get-sat-pro.herokuapp.com/api";

/**
 * gets the list of students after communicating with the get_students API
 */

//credentials: 'include' sends the cookie along with request. fetch by default does not inlude cookies
export function getStudentList() {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_STUDENT_LIST_STARTED
        });
        return fetch(`${baseUrl}/get_students`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        })
       // .then(response => response.json())
        .then(payload => {
            if (student_list_response.Status === 200) {
                dispatch({
                    type: actionTypes.GET_STUDENT_LIST_SUCCESS,
                    payload: student_list_response.students
                })
            }
            else {
                dispatch({
                    type: actionTypes.GET_STUDENT_LIST_SUCCESS,
                    error: student_list_response.students
                })
            }
        })
    }
  }
