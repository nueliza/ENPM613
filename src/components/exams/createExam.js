import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createExam} from "../../actions/examHandler";
import "./exams.css";
import ErrorMessage from "../ErrorMessage";

/**
 * Representation component for creating an exam.
 */

const QuestionInput = (props) => {
    return (
        props.Exam.map((item, id) => {
            let questionId = `qn-${id}`, answerId = `ans-${id}`;
            return (
                <div className="questionWrapper" key={id}>
                    <div className="group">
                        <span className="label">Question number {id + 1}</span>
                        <input type="text"
                            name="question"
                            data-id={id}
                            id={questionId}
                            className="inputField"
                            placeholder="Type Question here..."
                            required
                        />
                    </div>
                    {id > 0 ? <FontAwesomeIcon
                        className="icon"
                        data-id={id}
                        onClick={props.deleteQuestion}
                        icon={iconMapping["Trash"]}
                        style={{color: "var(--alert-color)"}}
                        size="1x" /> : ''}
                    <br />
                    <OptionsInput item={item} id={id} deleteOption={props.deleteOption}/>
                    {item.options.length === 4? 
                        <Fragment>
                            <ErrorMessage content="You have reached the maximum number of options" messageType="warning" />
                            <br />
                        </Fragment>
                        :
                        <Fragment> 
                            <br/>
                            <div onClick={props.addOption} data-id={id} className="btn btn-info getSatProSecondaryButton">
                                <FontAwesomeIcon
                                    icon={iconMapping["Plus"]}
                                    size="1x" />
                                &nbsp;Add Option
                            </div>
                        </Fragment>
                       
                    }
                    
                    <div className="group">
                        <span className="label"> Correct Answer</span>
                        {/* <input type="text"
                            name="ans"
                            data-id={id}
                            id={answerId}
                            className="answer"
                            placeholder="Type correct answer here..."
                            required
                        /> */}
                        <select name="ans" data-id={id} id={answerId} style={{width: "100%"}} required>
                            <option value = "">Select the correct answer</option>
                            {
                                item.options.map((option,idx)=>{
                                    return <option>{option}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            )
        })
    )
}

const OptionsInput = (props) => {
    return (
        props.item.options.map((val, idx) => {
            //let optionId = `opt-${props.id}-${idx}`;
            return (
                <div className="optionsWrapper">
                    <div className="group">
                        <span className="label"> Option {idx + 1}</span>
                        <input type="text"
                            className="inputField"
                            name="options"
                            data-id={props.id}
                            id={idx}
                            placeholder="Type Option here..."
                            required
                        />
                    </div>
                    {idx > 1 ? <FontAwesomeIcon
                        data-id={props.id}
                        className="icon"
                        name={idx}
                        id={idx}
                        onClick={props.deleteOption}
                        icon={iconMapping["Trash"]}
                        style={{color: "var(--alert-color)"}}
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
            Exam: [{ question: "", options: ["", ""], ans: "" }],
            examName: "",
            errors: []
        }
    }

    addQuestion = (e) => {
        e.preventDefault()
        this.setState((prevState) => ({
            Exam: [...prevState.Exam, { question: "", options: ["", ""], ans: "" }]
        }));
    }

    addOption = (e) => {
        e.preventDefault()
        let id = e.target.dataset.id;
        let updatedExam = this.state.Exam;
        updatedExam[id].options = [...updatedExam[id].options, ""];
        this.setState({ Exam: updatedExam });
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
        e.preventDefault();
        //TODO: Input field validations

        const reqObject ={
            "exam_name":this.state.examName,
            "questions": this.state.Exam
        }
        this.props.createExam(reqObject)
        .then(()=>{
            this.props.history.push("/exams")
        })
    }

    handleChange = (e) => {
        let Exam = [...this.state.Exam]
        if (e.target.name === "options") {
            Exam[e.target.dataset.id]["options"][e.target.id] = e.target.value;
        } else if(e.target.name === "name"){
            this.setState({examName: e.target.value})
        }
        else {
            Exam[e.target.dataset.id][e.target.name] = e.target.value;
        }
        this.setState({ Exam });
    }

    render() {
        return (
            <div className="dashboard_body">
                 <button
                    type="button"
                    className="btn btn-info getSatProSecondaryButton"
                    style={{marginBottom: "10px"}}
                    onClick={() => {
                        this.props.history.push({
                            pathname: '/exams',
                        })
                    }}>
                    <FontAwesomeIcon icon={iconMapping["back"]} size="1x" />
                    &nbsp;<span>Back to Exams</span>
                </button>

                <h3>Create an Exam</h3>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    Exam Name <input type="text" name="name" placeholder="Exam Name" required/>
                    <QuestionInput
                        Exam={this.state.Exam}
                        addOption={this.addOption}
                        deleteOption={this.deleteOption}
                        deleteQuestion={this.deleteQuestion}
                        errors ={this.state.errors}
                    />
                    <br />
                    {this.state.Exam.length === 20? 
                        <Fragment>
                            <ErrorMessage content="You have reached the maximum number of questions" messageType="warning" />
                            <br />
                        </Fragment>
                        :
                        <Fragment>
                            <button onClick={this.addQuestion} className="btn btn-info getSatProSecondaryButton">
                            <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                            &nbsp;Add Question
                            </button> &nbsp;&nbsp;
                        </Fragment>
                    }
                    <button className="btn btn-success getSatProSubmitBtn" >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        createExam : (payload) => dispatch(createExam(payload))
    }
}

const mapStateToProps = state => ({
    loading: state.loader.loading,
})

export default connect( mapStateToProps,mapDispatchToProps)(CreateExam)