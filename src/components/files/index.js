import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconMapping } from "../utils/iconsMapping.js";
import FileUploadModal from "../fileUploadModal";
import "./files.css";
import Loading from "../loading";


class Files extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }


    UNSAFE_componentWillMount() {
        if (this.props.isTutor)
            this.props.getFilesTutor()
        else
            this.props.getFilesStudent({ "mod_id": this.props.selectedModuleId })
    }

    handleDownload = (link) =>{
        window.open(link,"_blank")
    }

    handleDelete = (fileId) =>{
        let payload ={
            "model_name": "File",
            "model_id": fileId
        }
    }
    
    render() {
        if (this.props.loading) return <Loading />
        return Object.keys(this.props.files).length === 0 ? "Not Found":
        (
            <div className="dashboard_body files_body">
                <div className="dashboard_subSection">
                    <div className="quoteWrapper">
                        <FontAwesomeIcon icon={iconMapping["QuoteLeft"]} size="2x" style={{color: "gray"}} />&nbsp;
                        <span className="quoteContent">An investment in knowledge pays the best interest </span>
                        <span className="author">- Benjamin Franklin</span>
                    </div>
                    <br />
                    <ul className="list-group">
                    {this.props.files.map((file,id)=>{
                            return(
                                <li className="list-group-item" key={id}>{file.file_name}
                                    <FontAwesomeIcon 
                                        icon={iconMapping["Trash"]} 
                                        onClick={()=>this.handleDelete(file.file_id)}
                                        size="1x" 
                                        className={this.props.isTutor?"": "hide"}
                                        style={{color: "var(--alert-color)", float: "right", marginTop: "10px", marginLeft: "10px"}}
                                    />
                                    <button type="button" className="btn btn-info" onClick={()=>this.handleDownload(file.link)}>Download</button>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <br/>
                    {this.props.isTutor?
                    <button 
                        type="button" 
                        className="btn btn-info getSatProSecondaryButton" 
                        onClick={() => {
                            this.setState({showModal: true})
                    }}>
                        <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                        &nbsp;<span>Upload Files</span>
                    </button> : ""}
                    <FileUploadModal 
                        isVisible = {this.state.showModal} 
                        onCloseModal = {()=>{this.setState({ showModal :false} )}} 
                        uploadFile = {this.props.uploadFile}
                    />
                </div>
            </div>
        )
    }
}
export default Files;