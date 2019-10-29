import React, { Component, Fragment } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./exams.css";

const QuestionInput = (props) => {
    return (
        props.Exam.map((item, id) => {
            let questionId = `qn-${id}`, answerId = `ans-${id}`
            return (
                <div className="questionWrapper" key={id}>
                    Question number {id + 1}
                    <input type="text"
                        name={questionId}
                        data-id={id}
                        id={questionId}
                        className="question"
                        defaultValue={props.Exam[id].question}
                    />
                    {id > 0 ?<FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" /> : ''}
                    <br />
                    <OptionsInput item={item} id={id} />
                    <br />

                    <button onClick={props.addOption} data-id={id}>
                        <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                        &nbsp;Add Option
                    </button>
                    Correct Answer
                    <input type="text"
                        name={answerId}
                        data-id={id}
                        id={answerId}
                        className="answer"
                        defaultValue={props.Exam[id].answer}
                    />
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
                    Option {idx+1}
                    <input type="text"
                        className="options"
                        name={idx}
                        data-id={props.id}
                        id={optionId}
                        defaultValue={props.item.options[idx]} />
                    {idx > 1 ?<FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" /> : ''}
                </div>
            )
        })
    )
}
class CreateExam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Exam: [{ question: "Type Question Here", options: ["Option", "Option"], answer: "Type Answer here" }]
        }
    }

    addQuestion = (e) => {
        this.setState((prevState) => ({
            Exam: [...prevState.Exam, { question: "Type Question Here", options: ["Option", "Option"], answer: "Type Answer here" }]
        }));
    }

    addOption = (e) => {
        let id = e.target.dataset.id;
        let updatedExam = this.state.Exam;
        updatedExam[id].options = [...updatedExam[id].options, "Optionssss"];
        this.setState((prevState) => ({
            Exam: updatedExam
        }));
    }

    deleteQuestion =(e) =>{
        //prevState.Exam.filter or remove
    }

    deleteOption = (e) =>{
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        let Exam = [...this.state.Exam]
        if (e.target.className == "options") {
            Exam[e.target.dataset.id]["options"][e.target.name] = e.target.value;
        } else {
            Exam[e.target.dataset.id][e.target.className] = e.target.value;
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
                    <QuestionInput Exam={Exam} addOption={this.addOption} deleteOption={this.deleteOption}/>
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