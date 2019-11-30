import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./exams.css";
import Loading from "../loading";
import { Redirect } from 'react-router';

/**
 * Representational component for viewing an exam
 */

class ViewExam extends Component {

    render() {
        console.log("props", this.props)
        if (this.props.loading) return <Loading />
        //redirects to Not found page if the getExamsList API fails
        let redirection = this.props.location.state.from === "Exams"? '/exams':'/grades'
        return Object.keys(this.props.selectedExam).length === 0 ? <Redirect to={redirection}/> :
        (
            <div className="dashboard_body view_exam">
                <div className="dashboard_subSection">
                    <button
                        type="button"
                        className="btn btn-info getSatProSecondaryButton"
                        style={{marginBottom: "10px"}}
                        onClick={() => {
                            this.props.history.push({
                                pathname: redirection,
                            })
                        }}>
                        <FontAwesomeIcon icon={iconMapping["back"]} size="1x" />
                        &nbsp;<span>Back to {this.props.location.state.from}</span>
                    </button>
                    <br />
                    <h3>{this.props.selectedExamName}</h3>
                    {this.props.isTutor? "":<h4>Score: &nbsp; {this.props.selectedExamScore}</h4> }
                    <FontAwesomeIcon icon={iconMapping["tick"]}  color="#17a2b8" size="1x" /> Correct Answer &nbsp;
                    {this.props.isTutor? "" :<Fragment><FontAwesomeIcon icon={iconMapping["cross"]}  color="#ee442f" size="1x" /> Wrong Answer</Fragment>}
                    {this.props.selectedExam.map((question, id)=>{
                        return (
                            <div className="questionWrapper" key={id}>
                                Question {id+1}: {question.question}
                                <div className="optionsWrapper">
                                    <ul>
                                        {question.options.map((option, idx)=>{
                                            return(
                                                <li key={idx}>
                                                    <div className="itemWrapper">
                                                        {option}
                                                        &nbsp;{question.ans == option? 
                                                            <FontAwesomeIcon icon={iconMapping["tick"]}  color="#17a2b8" size="1x" />: 
                                                            this.props.isTutor? "":<FontAwesomeIcon icon={iconMapping["cross"]}  color="#ee442f" size="1x" /> 
                                                        }
                                                        <span className={question.ques_status === "Incorrect"? "Incorrect": "Correct"}>
                                                            &nbsp; {question.user_answer == option? "Your Answer": ""}
                                                        </span>
                                                    </div>
                                                </li> 
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        )
    }

}
export default withRouter(ViewExam);