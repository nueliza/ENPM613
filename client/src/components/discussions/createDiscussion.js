import React, { Component, Fragment } from 'react';

import ErrorMessage from "../ErrorMessage";

class CreateDiscussion extends Component {
    constructor(props){
        super(props);
        this.state ={
            discussion: {content: "", header: ""},
            errors: {content: "", header:""},
        }
    }

    handleChange = (e) =>{
        let discussion = this.state.discussion;
        discussion[e.target.id] = e.target.value;
        this.setState({discussion: discussion});
    }

    handleSubmit = (e) =>{
        //TODO: validation of input fields.
        let discussion =  this.state.discussion;
        let isContentValid = this.validateField(discussion.content, "content")
        let isHeaderValid = this.validateField(discussion.header, "header")
        isContentValid && isHeaderValid ? console.log("FormValid") :console.log("Form not valid")
    }
    
    validateField = (fieldValue, fieldType) =>{
        let errors = this.state.errors;
        if(fieldValue === ""){
            errors[fieldType] = `Discussion ${fieldType} is required`;
            this.setState({errors: errors})
            return false
        }
        else{
            errors[fieldType] = "";
            this.setState({errors: errors})
            return true;
        }
    }

    render() {
        return (
            <div className="dashboard_body discussion_body">
                <h3>Start a Discussion</h3>
                <div className="NewDiscussionWrapper">
                    Discussion Heading
                    <input
                        type="text"
                        id="header"
                        placeholder="Type Discussion heading here..."
                        onChange= {this.handleChange}
                    />
                    <ErrorMessage content={this.state.errors.header} />
                    <br />
                    Discussion Content
                    <textarea
                        className="form-control"
                        id="content"
                        placeholder="Type Discussion Content here..."
                        onChange={this.handleChange}
                    />
                     <ErrorMessage content={this.state.errors.content} />
                    <br />
                    <button 
                        className="btn btn-success"
                        onClick={this.handleSubmit} 
                        //disabled = {!this.state.formValid}
                        >
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default CreateDiscussion