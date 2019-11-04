import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./index.css";

class Discussions extends Component {
    render() {
        return (
            <div className="dashboard_body discussionList_body">
                <div className="dashboard_subSection">
                    <ul className="list-group">
                        <li className="list-group-item discussion" onClick={() => {
                                this.props.history.push({
                                    pathname: '/Discussion',
                                })
                            }}>Discussion 1</li>
                        <li className="list-group-item discussion">Discussion 2 </li>
                        <li className="list-group-item discussion">Discussion 3 </li>
                        <li className="list-group-item discussion">Discussion 4 </li>
                    </ul>
                    <button 
                        type="button" 
                        className="btn btn-link" 
                        onClick={() => {
                        this.props.history.push({
                            pathname: '/CreateDiscussion',
                        })
                    }}>
                        <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                        &nbsp;Start a Discussion
                    </button>
                </div>
            </div>
            
            )
    }
}
export default withRouter(Discussions);