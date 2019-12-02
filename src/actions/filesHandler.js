/**
 * Contains all the service handlers for files
 */

import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as errors from "./errorMessage";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
axios.defaults.withCredentials = true

/**
 * Communicates with get_files API, and returns the list of files for the module tutor is assigned to.
 */
export function getFilesTutor(){
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_FILES_STARTED
        });
        return axios.get(`/get_files`)
        .then( response =>{
            dispatch({
                type: actionTypes.GET_FILES_SUCCESS,
                payload: response.data.file_list
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
                type: actionTypes.GET_FILES_FAILED,
                error: errorMessage
            })
        })
    }
}


/**
 * Communicates with the get_files API to get the list of exams for students based on the module selected.
 * @param {Object} reqObject 
 */
export function getFilesStudent(reqObject){
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_FILES_STARTED
        });
        return axios.post(`/get_files`, reqObject)
        .then( response =>{
            dispatch({
                type: actionTypes.GET_FILES_SUCCESS,
                payload: response.data.file_list
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
                type: actionTypes.GET_FILES_FAILED,
                error: errorMessage
            })
        })
    }
}

/**
 * Communicated with the add_file API, and upload the file to the system
 * @param {FormData} reqObject 
 */
export function uploadFile(reqObject){
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    return async dispatch => {
        dispatch({
            type: actionTypes.UPLOAD_FILES_STARTED
        });
        return axios.post(`/add_file/`, reqObject)
        .then( response =>{
            dispatch({
                type: actionTypes.UPLOAD_FILES_SUCCESS,
                payload: "File has been uploaded successfully"
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
                type: actionTypes.UPLOAD_FILES_FAILED,
                error: errorMessage
            })
        })
    }
}

/**
 * Communicates with the delete API and delete the file from the system
 * @param {Object} reqObject 
 */
export function deleteFile(reqObject) {
    return async dispatch => {
        dispatch({
            type: actionTypes.DELETE_FILE_STARTED
        });
        return axios.post(`/delete`, reqObject)
            .then(response => {
                dispatch({
                    type: actionTypes.DELETE_FILE_SUCCESS,
                    payload: "You've successfully deleted the file!"
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
                    type: actionTypes.DELETE_FILE_FAILED,
                    error: errorMessage
                })
            })
    }
}