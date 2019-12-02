/**
 * Contains all the service handlers for discussions
 */

import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as errors from "./errorMessage";

axios.defaults.baseURL = 'https://get-sat-pro.herokuapp.com/api';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
axios.defaults.withCredentials = true


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

export function uploadFile(reqObject){
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    //axios.defaults.headers.post['Content-Type'] = 'application/json'; 
    return async dispatch => {
        dispatch({
            type: actionTypes.UPLOAD_FILES_STARTED
        });
        return axios.post(`/add_file/`, reqObject, { headers: { 'Content-Type': 'multipart/form-data' } })
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