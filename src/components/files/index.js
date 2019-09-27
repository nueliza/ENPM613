import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder} from '@fortawesome/free-solid-svg-icons';


import "./files.css"
class Files extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <Fragment>
                 <div className="dashboard_header">
                 <FontAwesomeIcon icon={faFolder} size="2x" /> &nbsp;<h3>Files</h3>
                    <div className="userInfo">
                        <span>Username</span>&nbsp;|&nbsp;<span>Last logged In:</span> <br/>
                        <Link to="/">Sign out</Link> 
                    </div>
                </div>
                <hr />
                <ul class="list-group">
                    <li class="list-group-item">File 1 <span className="tag newTag"><b>New</b></span><button type="button" className="btn btn-info">Download</button></li>
                    <li class="list-group-item">File 2 <button type="button" className="btn btn-info">Download</button></li>
                    <li class="list-group-item">File 3 <button type="button" className="btn btn-info">Download</button></li>
                    <li class="list-group-item">File 4 <span className="tag notPublishedTag"><b>Not published</b></span><button type="button" className="btn btn-secondary">Download</button></li>
                </ul>
            </Fragment>)
    }
}
export default Files;