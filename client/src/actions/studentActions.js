import * as actions from "./actions";
import * as actionTypes from "./actionTypes";

const baseUrl = "https://get-sat-pro.herokuapp.com/api";
export function getStudentList() {
    return async dispatch => {
        dispatch(actions.studentListStarted());
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
            }
            else {
                console.log("getStudentList", payload);
            }
        })
    }
  }
