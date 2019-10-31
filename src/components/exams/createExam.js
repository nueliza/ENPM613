import React, { Component, Fragment } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./exams.css";
import Modal from "../model";

const QuestionInput = (props) => {
    return (
        props.Exam.map((item, id) => {
            let questionId = `qn-${id}`, answerId = `ans-${id}`
            return (
                <div className="questionWrapper" key={id}>
                    <div className="group">
                        <span className="label">Question number {id + 1}</span>
                        <input type="text"
                            name="question"
                            data-id={id}
                            id={questionId}
                            className="inputField"
                            value={props.Exam[id].question}
                        />
                    </div>
                    {id > 0 ? <FontAwesomeIcon
                        className="icon"
                        data-id={id}
                        onClick={props.deleteQuestion}
                        icon={iconMapping["Trash"]}
                        size="1x" /> : ''}
                    <br />
                    <OptionsInput item={item} id={id} deleteOption={props.deleteOption} />
                    <br />

                    <button onClick={props.addOption} data-id={id} className="btn btn-info">
                        <FontAwesomeIcon
                            icon={iconMapping["Plus"]}
                            size="1x" />
                        &nbsp;Add Option
                    </button>
                    <div className="group">
                        <span className="label"> Correct Answer</span>
                        <input type="text"
                            name={answerId}
                            data-id={id}
                            id={answerId}
                            className="answer"
                            value={props.Exam[id].answer}
                        />
                    </div>
                </div>
            )
        })
    )
}

const OptionsInput = (props) => {
    return (
        props.item.options.map((val, idx) => {
            let optionId = `opt-${props.id}-${idx}`;
            return (
                <div className="optionsWrapper">
                    <div className="group">
                        <span className="label"> Option {idx + 1}</span>
                        <input type="text"
                            className="inputField"
                            name="options"
                            data-id={props.id}
                            id={idx}
                            value={val}
                        />
                    </div>
                    {idx > 1 ? <FontAwesomeIcon
                        data-id={props.id}
                        className="icon"
                        name={idx}
                        id={idx}
                        onClick={props.deleteOption}
                        icon={iconMapping["Trash"]}
                        size="1x" /> : ''}
                </div>
            )
        })
    )
}
class CreateExam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Exam: [{ question: "Type Question Here", options: ["Option1", "Option2"], answer: "Type Answer here" }],
            showModal: false,
            modalContent: "",
            modalError: false
        }
    }

    addQuestion = (e) => {
        e.preventDefault()
        if(this.state.Exam.length == 20){
            this.setState({
                showModal : true, 
                modalContent : "You have reached the maximum number of questions",
                modalError: true
            })
        }
        else{
            this.setState((prevState) => ({
                Exam: [...prevState.Exam, { question: "Type Question Here", options: ["Option1", "Option2"], answer: "Type Answer here" }]
            }));
        }
        
    }

    addOption = (e) => {
        e.preventDefault()
        let id = e.target.dataset.id;
        let updatedExam = this.state.Exam;
        if(updatedExam[id].options.length == 4 ){
            this.setState({
                showModal : true, 
                modalContent : "You have reached the maximum number of options for a question",
                modalError: true
            })
        }
         else{
            updatedExam[id].options = [...updatedExam[id].options, "New Option"];
            this.setState({ Exam: updatedExam });
         }
    }

    deleteQuestion = (e) => {
        let questionId = e.currentTarget.dataset.id;
        var updatedExam = this.state.Exam;
        updatedExam.splice(questionId, 1)
        this.setState({ Exam: updatedExam });
    }

    deleteOption = (e) => {
        let questionId = e.currentTarget.dataset.id;
        let optionId = e.currentTarget.id;
        var updatedExam = this.state.Exam;
        updatedExam[questionId].options.splice(optionId, 1);
        this.setState({ Exam: updatedExam })

    }

    handleSubmit = (e) => {
        console.log("Form submit")
        e.preventDefault();
    }

    handleChange = (e) => {
        let Exam = [...this.state.Exam]
        if (e.target.name == "options") {
            Exam[e.target.dataset.id]["options"][e.target.id] = e.target.value;
        } else {
            Exam[e.target.dataset.id][e.target.name] = e.target.value;
        }
        this.setState({ Exam });
    }

    render() {
        //<h3>Create {this.props.location.state.selectedSubModule} Exam</h3>
        return (
            <div className="dashboard_body">
                <h3>Create Exam for Algebra</h3>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <QuestionInput
                        Exam={this.state.Exam}
                        addOption={this.addOption}
                        deleteOption={this.deleteOption}
                        deleteQuestion={this.deleteQuestion}
                        handleChange={this.handleChange}
                    />
                    <br />
                    <button onClick={this.addQuestion} className="btn btn-info">
                        <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                        &nbsp;Add Question
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-success" >
                        Submit
                    </button>
                    <Modal 
                        isVisible = {this.state.showModal} 
                        onCloseModal = {()=>{this.setState({ showModal :false} )}} 
                        modalContent = {this.state.modalContent}
                        modalError = {this.state.modalError}
                        />
                </form>
            </div>
        )
    }
}
export default CreateExam;