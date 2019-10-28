import React, { Component, Fragment } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./exams.css";

class CreateExam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Exam: [{ question: "Type Question Here", options: {}, answer: "Type Answer here" }]
        }
    }

    addQuestion = (e) =>{
        this.setState((prevState)=>({
            Exam:[...prevState.Exam, { question: "Type Question Here", options: {}, answer: "Type Answer here" }]
        }));
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
    }

    handleChange = (e) =>{
        let Exam = [...this.state.Exam]
        Exam[e.target.dataset.id][e.target.className] = e.target.value;
        this.setState({Exam}, ()=>console.log("CreateExam Page: State Updated", this.state.Exam));

    }
    
    render() {
        let { Exam } = this.state;
        //<h3>Create {this.props.location.state.selectedSubModule} Exam</h3>
        return (
            <Fragment>
                <h3>Algebra</h3>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    {Exam.map((item, id) => {
                        let questionId = `qn-${id}`, answerId = `ans-${id}`
                        return (
                            <div className="questionWrapper" key={id}>
                                Question number {id+1}
                                <input type="text"
                                    name={questionId}
                                    data-id={id}
                                    id={questionId}
                                    className="question"
                                    defaultValue={Exam[id].question} 
                                />
                                <br />
                                Options
                                <div className="optionsWrapper">
                                    <input type="text" />
                                    <input type="text" />
                                </div>
                                Correct Answer
                                <input type="text" 
                                    name={answerId}
                                    data-id={id}
                                    id={answerId}
                                    className="answer"
                                    defaultValue={Exam[id].answer}
                                />
                            </div>
                        )
                    })}
                    <button onClick= {this.addQuestion}>
                        <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                        &nbsp;Add another Question
                    </button>
                </form>
            </Fragment>
        )
    }
}
export default CreateExam;