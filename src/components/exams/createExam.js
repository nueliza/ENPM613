import React, { Component, Fragment } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./exams.css";
import { update } from 'immutable';

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
                        placeholder={props.Exam[id].question}
                    />
                    </div>
                    {/* Question number {id + 1}
                    <input type="text"
                        name="question"
                        data-id={id}
                        id={questionId}
                        className="question"
                        placeholder={props.Exam[id].question}
                    /> */}
                    {id > 0 ? <FontAwesomeIcon
                        className="icon"
                        data-id={id}
                        onClick={props.deleteQuestion}
                        icon={iconMapping["Trash"]}
                        size="1x" /> : ''}
                    <br />
                    <OptionsInput item={item} id={id} deleteOption={props.deleteOption} />
                    <br />

                    <button onClick={props.addOption} data-id={id}>
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
                        placeholder={props.Exam[id].answer}
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
            console.log("Value", val)
            return (
                <div className="optionsWrapper">
                    <div className="group">
                        <span className="label"> Option {idx + 1}</span>
                        <input type="text"
                            className="inputField"
                            name="options"
                            data-id={props.id}
                            id={idx}
                            placeholder={val}/>
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
            Exam: [{ question: "Type Question Here", options: ["Option1", "Option2"], answer: "Type Answer here" }]
        }
    }

    addQuestion = (e) => {
        this.setState((prevState) => ({
            Exam: [...prevState.Exam, { question: "Type Question Here", options: ["Option1", "Option2"], answer: "Type Answer here" }]
        }));
    }

    addOption = (e) => {
        let id = e.target.dataset.id;
        let updatedExam = this.state.Exam;
        updatedExam[id].options = [...updatedExam[id].options, "New Option"];
        this.setState((prevState) => ({
            Exam: updatedExam
        }));
    }

    deleteQuestion = (e) => {
        this.setState({ Exam: this.state.Exam.splice(e.target.dataset.id, 1) });
    }

    deleteOption = (e) => {
        let questionId = e.currentTarget.dataset.id;
        let optionId = e.currentTarget.id;
        var updatedExam = this.state.Exam;
        // updatedExam[questionId]["options"].splice(optionId, 1);
        // console.log("HERE", updatedExam);
        // this.setState({Exam: updatedExam}, ()=>{console.log("State", this.state.Exam)})
        updatedExam[questionId].options = updatedExam[questionId].options.filter((_,i)=>i != optionId)
        this.setState({Exam: updatedExam })

    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        console.log("HETEEEEE", e.target)
        let Exam = [...this.state.Exam]
        if (e.target.name == "options") {
            Exam[e.target.dataset.id]["options"][e.target.id] = e.target.value;
        } else {
            Exam[e.target.dataset.id][e.target.name] = e.target.value;
        }
        this.setState({ Exam });
    }

    render() {
        let { Exam } = this.state;
        //<h3>Create {this.props.location.state.selectedSubModule} Exam</h3>
        return (
            <Fragment>
                <h3>Algebra</h3>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <QuestionInput
                        Exam={Exam}
                        addOption={this.addOption}
                        deleteOption={this.deleteOption}
                        deleteQuestion={this.deleteQuestion}
                    />
                    <br />
                    <button onClick={this.addQuestion}>
                        <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                        &nbsp;Add Question
                    </button>
                </form>
            </Fragment>
        )
    }
}
export default CreateExam;