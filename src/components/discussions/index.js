import React, { Component} from 'react';
import { withRouter } from "react-router-dom";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./index.css";

class Discussions extends Component {
    render() {
        return (
            <div className="dashboard_body discussionList_body">
                <div className="dashboard_subSection">
                    <div className="quoteWrapper">
                        <FontAwesomeIcon icon={iconMapping["QuoteLeft"]} size="2x" style={{color: "gray"}} />&nbsp;
                        <span className="quoteContent">Discussion is an exchange of knowledge; an argument an exchange of ignorance </span>
                        <span className="author">- Robert Quillen</span>
                    </div>
                    <br />
                    <ul className="list-group">
                        <li className="list-group-item discussion" onClick={() => {
                                this.props.history.push({
                                    pathname: '/Discussion',
                                })
                            }}>Discussion 1
                            <FontAwesomeIcon 
                                icon={iconMapping["Trash"]} 
                                size="1x" 
                                className={this.props.isTutor? "": "hide"}
                                style={{color: "var(--alert-color)", float: "right"}}
                            />
                        </li>
                        <li className="list-group-item discussion">Discussion 2 </li>
                        <li className="list-group-item discussion">Discussion 3 </li>
                        <li className="list-group-item discussion">Discussion 5 </li>
                    </ul>
                    <br />
                    <button 
                        type="button" 
                        className="btn btn-info getSatProSecondaryButton" 
                        onClick={() => {
                        this.props.history.push({
                            pathname: '/CreateDiscussion',
                        })
                    }}>
                        <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x"/>
                        &nbsp;<span>Start a Discussion</span>
                    </button>
                </div>
            </div>
            
            )
    }
}
export default withRouter(Discussions);