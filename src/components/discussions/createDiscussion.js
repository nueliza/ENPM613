import React, { Component } from 'react';
import ErrorMessage from "../ErrorMessage";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        let payload =  {
            "mod_id": this.props.selectedModuleId,
            "title": discussion.header,
            "content":  discussion.content
        }
        if(isContentValid && isHeaderValid){
            this.props.createDiscussion(payload)
            .then(()=>{
                this.props.history.push("/discussions")
            })
            
        }
        else{
            console.log("Form not valid")
        }
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
                <h3>Start a Discussion</h3>
                <div className="NewDiscussionWrapper">
                    Discussion Heading
                    <br />
                    <input
                        type="text"
                        id="header"
                        placeholder="Type Discussion heading here..."
                        onChange= {this.handleChange}
                    />
                    <ErrorMessage content={this.state.errors.header} messageType="error"/>
                    <br />
                    Discussion Content
                    <textarea
                        className="form-control"
                        id="content"
                        placeholder="Type Discussion Content here..."
                        onChange={this.handleChange}
                    />
                     <ErrorMessage content={this.state.errors.content} messageType="error" />
                    <br />
                    <button 
                        className="btn btn-success getSatProSubmitBtn"
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


export default CreateDiscussion;