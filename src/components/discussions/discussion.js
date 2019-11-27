import React, { Component } from 'react';
import Loading from "../loading";
import { Redirect } from 'react-router';
import { withRouter } from "react-router-dom";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DiscussionThreads = (props) => {

    return (
        props.replies.map((replyItem, id) => {
            let isCrrentUser = (props.userInfo.fname === replyItem.fname && 
                props.userInfo.lname === replyItem.lname) ? "avatar currentUser" : "avatar";
            return (
                <div className="thread" key={id}>
                    <div className={isCrrentUser}>
                        {replyItem.fname.charAt(0)}{replyItem.lname.charAt(0)}
                    </div>
                    <div className="threadContent">
                        {replyItem.content}
                    </div>
                    <span className="author">
                        - {replyItem.fname} {replyItem.lname}
                        <br/> replied at {replyItem.reply_posted}
                    </span>
                </div>
            )
        })
    );
}

class Discussion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showReplyContainer: false,
        }
    }

    handleReply = (e) => {
        this.setState({ showReplyContainer: !this.state.showReplyContainer });
        let payload ={
            "discuss_id": this.props.selectedDiscussion.discuss_id,
            "content": this.refs.reply.value
        }
       this.props.replyToDiscussion(payload)
       .then(()=>{
           this.props.getDiscussion({"discuss_id": this.props.selectedDiscussion.discuss_id})
       })
    }

    render() {
        if (this.props.loading) return <Loading />
        return this.props.selectedDiscussion === "" ? <Redirect to="/discussions"/>:
        (
            <div className="dashboard_body discussion_body">
                <button
                    type="button"
                    className="btn btn-info getSatProSecondaryButton"
                    style={{marginBottom: "10px"}}
                    onClick={() => {
                        this.props.history.push({
                            pathname: '/discussions',
                        })
                    }}>
                    <FontAwesomeIcon icon={iconMapping["back"]} size="1x" />
                    &nbsp;<span>Back to Discussions</span>
                </button>
                <div className="discussion">
                    <h2>{this.props.selectedDiscussion.title}</h2>
                    <hr />
                    <span className="discussionContent">
                        {this.props.selectedDiscussion.content}
                    </span>
                    <div className="author"> 
                        - {this.props.selectedDiscussion.fname} {this.props.selectedDiscussion.lname}
                        <br />
                        Posted at {this.props.selectedDiscussion.posted}
                    </div>
                    <div className="reply">
                        <button
                            type="button"
                            className="btn btn-link"
                            onClick={() => { this.setState({ showReplyContainer: true }) }}
                        >
                            &nbsp;Reply
                    </button>
                    </div>
                </div>
                {this.state.showReplyContainer ?
                    <div className="replyContainer">
                        <textarea className="form-control"
                            id="exampleFormControlTextarea4"
                            rows="3"
                            placeholder="Type reply here..."
                            ref="reply"
                        />
                        <br />
                        <button
                            className="btn-sm btn-success"
                            onClick={this.handleReply}
                        >
                            Submit
                    </button>
                    </div>
                    : ""}

                <DiscussionThreads
                    replies={this.props.selectedDiscussion.replies}
                    userInfo={this.props.userInfo}
                />
            </div>
        );
    }
}

export default withRouter(Discussion);