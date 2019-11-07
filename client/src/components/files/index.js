import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconMapping } from "../utils/iconsMapping.js";
import FileUploadModal from "../modal";
import "./files.css";


class Files extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }
    render() {
        return (
            <div className="dashboard_body files_body">
                <div className="dashboard_subSection">
                    <div className="quoteWrapper">
                        <FontAwesomeIcon icon={iconMapping["QuoteLeft"]} size="2x" style={{color: "gray"}} />&nbsp;
                        <span className="quoteContent">An investment in knowledge pays the best interest </span>
                        <span className="author">- Benjamin Franklin</span>
                    </div>
                    <br />
                    <ul className="list-group">
                        <li className="list-group-item">File 1 
                            <FontAwesomeIcon 
                                icon={iconMapping["Trash"]} 
                                size="1x" 
                                //className={props.isTutor?"": "hide"}
                                style={{color: "var(--alert-color)", float: "right", marginTop: "10px", marginLeft: "10px"}}
                            />
                            <button type="button" className="btn btn-info">Download</button>
                        </li>
                        <li className="list-group-item">File 2 <button type="button" className="btn btn-info">Download</button></li>
                        <li className="list-group-item">File 3 <button type="button" className="btn btn-info">Download</button></li>
                        <li className="list-group-item">File 4 <span className="tag notPublishedTag"><FontAwesomeIcon icon={iconMapping["NotPublished"]} size="1x" />&nbsp;<b>Not published</b></span><button type="button" className="btn btn-secondary">Download</button></li>
                    </ul>
                    {/**TODO:  show and hide button */}
                    <br/>
                    <button 
                        type="button" 
                        className="btn btn-info getSatProSecondaryButton" 
                        onClick={() => {
                            this.setState({showModal: true})
                    }}>
                        <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                        &nbsp;<span>Upload Files</span>
                    </button>
                    <FileUploadModal 
                        isVisible = {this.state.showModal} 
                        onCloseModal = {()=>{this.setState({ showModal :false} )}} 
                    />
                </div>
            </div>
        )
    }
}
export default Files;