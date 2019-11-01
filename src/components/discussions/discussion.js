import React, { Component } from 'react';


const DiscussionThreads = (props) =>{
    return(
        <div className="thread">
            <div className="avatar">
                AM
            </div>
            <div className="threadContent">
                This is the content of the thread
            </div>
            <span className="author">- Aarohi Mehta</span>
        </div>
    );
    
}

const ReplyContainer = (props) =>{
    return(
        <div className="replyContainer">
            <textarea class="form-control" 
                id="exampleFormControlTextarea4" 
                rows="3"
                placeholder="Type reply here..."
            />
            <br />
            <button 
                className="btn-sm btn-success" 
                onClick= {props.handleReplyContainer}
            >
                Submit
            </button>
        </div>
    )
}

class Discussion extends Component{
    constructor(props){
        super(props);
        this.state ={
            showReplyContainer :false
        }
    }

    handleReplyContainer = (e) =>{
        this.setState({showReplyContainer: !this.state.showReplyContainer});
    }
    render(){
        return(
            <div className="dashboard_body discussion_body">
                <div className="discussion">
                    <h2>Discussion Header</h2>
                    <hr />
                    <span className="discussionContent">
                        This is the content of the discussion
                    </span>
                    <div className="author"> - Annu Elizabeth Abraham</div>
                    <div className="reply">
                    <button 
                        type="button" 
                        className="btn btn-link" 
                        onClick={()=>{this.setState({showReplyContainer: true})}}
                    >
                        &nbsp;Reply
                    </button>
                </div>
                </div>
                {this.state.showReplyContainer ? 
                <ReplyContainer 
                    handleReplyContainer={this.handleReplyContainer}
                /> 
                : ""}
                
                <DiscussionThreads />
            </div>
        );
    }
}

export default Discussion;