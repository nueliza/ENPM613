import React, { Component } from 'react';

const DiscussionThreads = (props) => {

    return (
        props.replies.map((replyItem, id) => {
            let isCrrentUser = (props.userInfo.firstName === replyItem.authorFirstName && 
                props.userInfo.lastName === replyItem.authorLastName) ? "avatar currentUser" : "avatar";
            return (
                <div className="thread" key={id}>
                    <div className={isCrrentUser}>
                        {replyItem.authorFirstName.charAt(0)}{replyItem.authorLastName.charAt(0)}
                    </div>
                    <div className="threadContent">
                        {replyItem.content}
                    </div>
                    <span className="author">- {replyItem.authorFirstName} {replyItem.authorLastName}</span>
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
            data: {
                discussion: { header: "See this?", content: "Are you able to see this?", authorFirstName: "Annu", authorLastName: "Abraham" },
                replies: [{ content: "Yes, I see this clearly", authorFirstName: "Aarohi", authorLastName: "Mehta" }]
            }
        }
    }

    handleReply = (e) => {
        this.setState({ showReplyContainer: !this.state.showReplyContainer });
        let content = this.refs.reply.value;
        let stateData = this.state.data
        stateData.replies = [...this.state.data.replies, { content: content, authorFirstName: this.props.userInfo.firstName, authorLastName: this.props.userInfo.lastName }]
        console.log("State", stateData);
        this.setState({
            data: stateData
        })
    }

    render() {
        return (
            <div className="dashboard_body discussion_body">
                <div className="discussion">
                    <h2>{this.state.data.discussion.header}</h2>
                    <hr />
                    <span className="discussionContent">
                        {this.state.data.discussion.content}
                    </span>
                    <div className="author"> - {this.state.data.discussion.authorFirstName} {this.state.data.discussion.authorLastName}</div>
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
                    replies={this.state.data.replies}
                    userInfo={this.props.userInfo}
                />
            </div>
        );
    }
}

export default Discussion;