import React, { Component } from 'react';

import "./exams.css";

const ExamQuestions =(props) =>{
    return(
        props.sampleExam.map((question, id)=>{
            return(
                <div className="group" key={id}>
                    <label>{`${id+1}. ${question.question}`}</label>
                    <div className="optionGroup">
                    {question.options.map((option, idx)=>{
                        return(
                            <React.Fragment key={idx}>
                                <input 
                                    type="radio" 
                                    id={`${question.questionId}-${idx}`} 
                                    name={question.questionId} 
                                    value={option}
                                    onChange={props.handleChange}/>
                                &nbsp;
                                <label htmlFor={`${question.questionId}-${idx}`}>{option}</label>
                                <br />
                            </React.Fragment>
                        )
                    })}
                    </div>
                </div>
            )
        })
    );
}

class TakeExam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleExam: [{ questionId: 123, question: "How old are you?", options: ["20 years", "30 years", "35 years"] }, 
            { questionId: 234, question: "Are you enrolled in a program?", options: ["True", "false"] }],
            studentResponse: []
        }
    }

    handleChange = (e) =>{
        const questionId = e.target.name;
        const response = e.target.value;
        const updatedQuestion = this.state.studentResponse.find((item)=> item.questionId === questionId);
        if(updatedQuestion === undefined){
            this.setState((prevState)=>({studentResponse : 
                [...prevState.studentResponse, 
                    {questionId: questionId,response: response}]
            }));
        }
    }

    handleSubmit = (e) =>{
        console.log(this.state.studentResponse)
        //service call to submit exam
        this.props.history.push("/exams")
    }

    render() {
        return (
            <div className="dashboard_body exam_body">
                <div className="dashboard_subSection">
                    <h2>Exam Name</h2>
                    <div className="examWrapper">
                        <ExamQuestions
                            sampleExam = {this.state.sampleExam}
                            handleChange ={this.handleChange}
                        />
                        <button className="btn btn-success" onClick={this.handleSubmit} >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TakeExam;