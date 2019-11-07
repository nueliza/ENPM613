import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';

const FileUploader = (props) =>{
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
        props.onCloseModal()
    }

    return (
        <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        maxFiles={3}
        inputWithFilesContent={files => `${3 - files.length} more`}
        onSubmit={handleSubmit}
        />
    )
} 

class FileUploadModal extends Component {
    render() {
        return (
            <Modal open={this.props.isVisible} onClose={this.props.onCloseModal}>
                <h2>Upload Files</h2>
                <hr />
                <div style={{minWidth: "500px"}}>
                    <FileUploader onCloseModal={this.props.onCloseModal}/>
                </div>
            </Modal>)
    }
}
export default FileUploadModal;