import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {iconMapping} from "../utils/iconsMapping.js";
import "./files.css"
class Files extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <Fragment>
                <div className="dashboard_body">
                    <div className="dashboard_subSection">
                        <h2>Algebra</h2>
                        <ul className="list-group">
                            <li className="list-group-item">File 1 <span className="tag newTag"><b>New</b></span><button type="button" className="btn btn-info">Download</button></li>
                            <li className="list-group-item">File 2 <button type="button" className="btn btn-info">Download</button></li>
                            <li className="list-group-item">File 3 <button type="button" className="btn btn-info">Download</button></li>
                            <li className="list-group-item">File 4 <span className="tag notPublishedTag"><FontAwesomeIcon icon={iconMapping["NotPublished"]} size="1x" />&nbsp;<b>Not published</b></span><button type="button" className="btn btn-secondary">Download</button></li>
                        </ul>
                    </div>
                </div>
                <div className="dashboard_body">
                    <div className="dashboard_subSection">
                        <h2>Calculus</h2>
                        <ul className="list-group">
                            <li className="list-group-item">File 1 <span className="tag newTag"><b>New</b></span><button type="button" className="btn btn-info">Download</button></li>
                            <li className="list-group-item">File 2 <button type="button" className="btn btn-info">Download</button></li>
                            <li className="list-group-item">File 3 <button type="button" className="btn btn-info">Download</button></li>
                            <li className="list-group-item">File 4 <span className="tag notPublishedTag"><FontAwesomeIcon icon={iconMapping["NotPublished"]} size="1x" />&nbsp;<b>Not published</b></span><button type="button" className="btn btn-secondary">Download</button></li>
                        </ul>
                    </div>
                </div>
                <div className="dashboard_body">
                    <div className="dashboard_subSection">
                        <h2>Calculus</h2>
                        <ul className="list-group">
                            <li className="list-group-item">File 1 <span className="tag newTag"><b>New</b></span><button type="button" className="btn btn-info">Download</button></li>
                            <li className="list-group-item">File 2 <button type="button" className="btn btn-info">Download</button></li>
                            <li className="list-group-item">File 3 <button type="button" className="btn btn-info">Download</button></li>
                            <li className="list-group-item">File 4 <span className="tag notPublishedTag"><FontAwesomeIcon icon={iconMapping["NotPublished"]} size="1x" />&nbsp;<b>Not published</b></span><button type="button" className="btn btn-secondary">Download</button></li>
                        </ul>
                    </div>
                </div>
            </Fragment>)
    }
}
export default Files;