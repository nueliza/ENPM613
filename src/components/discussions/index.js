import React, { Component} from 'react';
import { withRouter } from "react-router-dom";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../loading';
import NotFound from "../NotFound";
import ToastContainer from "../toast/index";

import "./index.css";

class Discussions extends Component {

    UNSAFE_componentWillMount(){
        if(!this.props.isTutor)
        this.props.getDiscussionListStudent({"mod_id": this.props.selectedModuleId});
    }


    render() {
        if(this.props.loading) return <Loading />

        //redirects to Not found page if the getStudentList API fails

        return Object.keys(this.props.discussionList).length === 0? <NotFound />:
        (
            <div className="dashboard_body discussionList_body">
                <ToastContainer />
                <div className="dashboard_subSection">
                    <div className="quoteWrapper">
                        <FontAwesomeIcon icon={iconMapping["QuoteLeft"]} size="2x" style={{color: "gray"}} />&nbsp;
                        <span className="quoteContent">Discussion is an exchange of knowledge; an argument an exchange of ignorance </span>
                        <span className="author">- Robert Quillen</span>
                    </div>
                    <br />
                    <ul className="list-group">
                        {this.props.discussionList.map((discussion,id)=>{
                            return(
                                <li className="list-group-item discussion" key={id} onClick={() => {
                                    this.props.history.push({
                                        pathname: '/Discussion',
                                        state: { selectedDiscussion: discussion.discuss_id}
                                    })
                                }}> {discussion.title}
                                <div className="discussionDetails">
                                    <span>Posted On: {discussion.posted}</span>
                                </div>
                                <FontAwesomeIcon 
                                    icon={iconMapping["Trash"]} 
                                    size="1x" 
                                    className={this.props.isTutor? "": "hide"}
                                    style={{color: "var(--alert-color)", float: "right"}}
                                />
                            </li>
                            )
                        })}
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