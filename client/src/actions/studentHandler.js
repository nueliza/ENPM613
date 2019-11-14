import * as actionTypes from "./actionTypes";

const baseUrl = "https://get-sat-pro.herokuapp.com/api";
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
        .then(response => response.json())
        .then(payload => {
            if (payload.Status === 200) {
                console.log("getStudentList", payload);
                dispatch({
                    type: actionTypes.GET_STUDENT_LIST_SUCCESS,
                    payload: payload
                })
            }
            else {
                console.log("getStudentList", payload);
                dispatch({
                    type: actionTypes.GET_STUDENT_LIST_FAILED,
                    error: payload.message
                })
            }
        })
    }
  }
