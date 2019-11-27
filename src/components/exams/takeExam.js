import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./exams.css";
import Loading from "../loading";
import { Redirect } from 'react-router';

const ExamQuestions =(props) =>{
    return(
        props.exam.map((question, id)=>{
            return(
                <div className="group" key={id}>
                    <label>{`${id+1}. ${question.question}`}</label>
                    <div className="optionGroup">
                    {question.options.map((option, idx)=>{
                        return(
                            <React.Fragment key={idx}>
                                <input 
                                    type="radio" 
                                    id={`${question.ques_id}-${idx}`} 
                                    name={question.ques_id} 
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
            studentResponse: []
        }
    }


    handleChange = (e) =>{
        const questionId = parseInt(e.target.name, 10);
        const response = e.target.value;
        const updatedQuestion = this.state.studentResponse.find((item)=> item.ques_id === questionId);
        if(updatedQuestion === undefined){
            this.setState((prevState)=>({studentResponse : 
                [...prevState.studentResponse, 
                    {ques_id: questionId,ans: response}]
            }));
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        let payload = {
            "exam_id": this.props.selectedExamId,
            "sub": this.state.studentResponse
        }
        this.props.submitExam(payload)
        this.props.history.push("/exams")
    }

    render() {

        console.log("Here, Take Exam", this.state);
        if (this.props.loading) return <Loading />
        //redirects to Not found page if the getExamsList API fails
        return Object.keys(this.props.selectedExam).length === 0 ? <Redirect to="/exams"/> :
        (
            <div className="dashboard_body exam_body">
                <div className="dashboard_subSection">
                    <h2>{this.props.selectedExamName}</h2>
                    <div className="examWrapper">
                        <ExamQuestions
                            exam = {this.props.selectedExam}
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

export default withRouter(TakeExam);