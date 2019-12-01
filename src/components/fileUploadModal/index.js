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
        //allFiles.forEach(f => f.remove())
        props.onCloseModal()
    }

    return (
        <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        maxFiles={3}
        accept=".docx,.pdf"
        maxSizeBytes={3145728}
        inputWithFilesContent={files => `${3 - files.length} more`}
        onSubmit={handleSubmit}
        />
        // <div>
        //     <input type="file" name="file"/><button type="btn btn-info" onClick={()=>handleSubmit}>Submit</button>
        // </div>
        
    )
} 

class FileUploadModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            file: {}
        }
    }

    // handleSubmit =() =>{
    //     console.log("This", this.state.file);
    //     let payload = new FormData;
    //     payload.append("file", this.state.file)
    //     this.props.uploadFile(payload)
    // }

    render() {
        return (
            <Modal open={this.props.isVisible} onClose={this.props.onCloseModal}>
                <h2>Upload Files</h2>
                <hr />
                <FileUploader onCloseModal={this.props.onCloseModal} uploadFile = {this.props.uploadFile}/>
                {/* <div>
                    <input type="file" name="file" onChange={(e)=>this.setState({file: e.target.value})}/>
                    <button type="btn btn-info" onClick={()=>this.handleSubmit()}>Submit</button>
                </div> */}
            </Modal>)
    }
}
export default FileUploadModal;