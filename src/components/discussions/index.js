import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import Loading from '../loading';
import ToastContainer from "../toast/index";

import "./index.css";

/**
 * Representational component for list of discussions.
 * Users can naviagte to view a particular discussion.
 * Tutors can delete discussions
 */
class Discussions extends Component {

    UNSAFE_componentWillMount() {
        if (!this.props.isTutor)
            this.props.getDiscussionListStudent({ "mod_id": this.props.selectedModuleId });
        else
            this.props.getDiscussionListTutor();
    }

    handleDelete = (discussion_id) => {
        let reqObject = {
            "model_name": "Discussion",
            "model_id": discussion_id
        }
        this.props.deleteDiscussion(reqObject)
            .then(() => {
                if (this.props.isTutor)
                    this.props.getDiscussionListTutor()
                else
                    this.props.getDiscussionListStudent({ "mod_id": this.props.selectedModuleId })
            })
    }

    render() {
        if (this.props.loading) return <Loading />
        return (
            <div className="dashboard_body discussionList_body">
                <ToastContainer />
                <div className="dashboard_subSection">
                    <div className="quoteWrapper">
                        <FontAwesomeIcon icon={iconMapping["QuoteLeft"]} size="2x" style={{ color: "gray" }} />&nbsp;
                    <span className="quoteContent">Discussion is an exchange of knowledge; an argument an exchange of ignorance </span>
                        <span className="author">- Robert Quillen</span>
                    </div>
                    <br />
                    {Object.keys(this.props.discussionList).length === 0 ?
                        <Fragment>
                            <FontAwesomeIcon icon={iconMapping["sad"]} color="gray" size="7x" /> <br /><br />
                            Whoopsie-daisy!! No discussions yet! <br /><br />
                        </Fragment>
                        :
                        <ul className="list-group">
                            {this.props.discussionList.map((discussion, id) => {
                                return (
                                    <li className="list-group-item discussion" key={id}>
                                        {discussion.title}
                                        <FontAwesomeIcon
                                            icon={iconMapping["Trash"]}
                                            size="1x"
                                            data-tip data-for='Delete'
                                            className={this.props.isTutor ? "" : "hide"}
                                            style={{ color: "var(--alert-color)", float: "right", marginLeft: "10px", cursor: "pointer" }}
                                            onClick={() => this.handleDelete(discussion.discuss_id)}
                                        />
                                         <ReactTooltip id='Delete' type='info' className='mySepecialClass' >
                                            <span>Delete</span>
                                        </ReactTooltip> 
                                        <button
                                            type="button"
                                            className="btn btn-info"
                                            onClick={() => {
                                                this.props.getDiscussion({ "discuss_id": discussion.discuss_id })
                                                this.props.history.push({
                                                    pathname: '/Discussion',
                                                })
                                            }}
                                        >
                                            View Discussion
                                    </button>

                                        <div className="discussionDetails">
                                            <span>Posted On: {discussion.posted}</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>}
                    <br />
                    <button
                        type="button"
                        className="btn btn-info getSatProSecondaryButton"
                        onClick={() => {
                            this.props.history.push({
                                pathname: '/CreateDiscussion',
                            })
                        }}>
                        <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                        &nbsp;<span>Start a Discussion</span>
                    </button>
                </div>
            </div>

        )
    }
}
export default withRouter(Discussions);
