import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { iconMapping } from "../utils/iconsMapping.js";
import "./files.css"
class Files extends Component {
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
                        <li className="list-group-item">File 1 <button type="button" className="btn btn-info">Download</button></li>
                        <li className="list-group-item">File 2 <button type="button" className="btn btn-info">Download</button></li>
                        <li className="list-group-item">File 3 <button type="button" className="btn btn-info">Download</button></li>
                        <li className="list-group-item">File 4 <span className="tag notPublishedTag"><FontAwesomeIcon icon={iconMapping["NotPublished"]} size="1x" />&nbsp;<b>Not published</b></span><button type="button" className="btn btn-secondary">Download</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Files;