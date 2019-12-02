import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';

import "./modal.css";

/**
 * Representational component for File upload modal
 */
const FileUploader = (props) =>{
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        let payload = new FormData();
        payload.append("file", allFiles[0].file)
        props.uploadFile(payload)
        .then(()=>{
            props.getFiles()
        })
        props.onCloseModal()
    }

    return (
        <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        accept=".pdf"
        maxSizeBytes={3145728}
        inputWithFilesContent={files => `${1 - files.length} more`}
        onSubmit={handleSubmit}
        />
    )
} 

class FileUploadModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            file: {}
        }
    }

    render() {
        return (
            <Modal open={this.props.isVisible} onClose={this.props.onCloseModal}>
                <h2>Upload Files</h2>
                <hr />
                <FileUploader onCloseModal={this.props.onCloseModal} uploadFile = {this.props.uploadFile} getFiles={this.props.getFiles}/>
                <label>Supported file types: .pdf</label>
            </Modal>)
    }
}
export default FileUploadModal;