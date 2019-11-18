/**
 * Conatins all the service handlers for the student related actions
 */
import * as actionTypes from "./actionTypes";
import axios from "axios";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
axios.defaults.withCredentials = true


/**
 * gets the list of students after communicating with the get_students API
 */

//credentials: 'include' sends the cookie along with request. fetch by default does not inlude cookies
// export function getStudentList() {
//     return async dispatch => {
//         dispatch({
//             type: actionTypes.GET_STUDENT_LIST_STARTED
//         });
//         return fetch(`${baseUrl}/get_students`,{
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//                 'Authorization': `Bearer ${localStorage.getItem("token")}`,
//                 'session': cookies.get('session')
//             },
//             credentials: 'include'
//         })
//         .then(response => response.json())
//         .then(payload => {
//             if (student_list_response.Status === 200) {
//                 dispatch({
//                     type: actionTypes.GET_STUDENT_LIST_SUCCESS,
//                     payload: student_list_response.students
//                 })
//             }
//             else {
//                 dispatch({
//                     type: actionTypes.GET_STUDENT_LIST_SUCCESS,
//                     error: student_list_response.students
//                 })
//             }
//         })
//     }
//   }

export function getStudentList() {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_STUDENT_LIST_STARTED
        });
        return axios.get(`/get_students`)
        .then(result => {
            console.log("here",result.data);
            dispatch({
                type: actionTypes.GET_STUDENT_LIST_SUCCESS,
                payload: result.data.students
            })
        })
        .catch(error =>{
            console.log("here",error.response.data);
            dispatch({
                type: actionTypes.GET_STUDENT_LIST_SUCCESS,
                error: error.data.message
            });
        })
  }
}
