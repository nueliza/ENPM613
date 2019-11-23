import React, { Component } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import ToastContainer from "../toast";
import Loading from "../loading";
import NotFound from "../NotFound";

const ExamList = (props) => {
    console.log("Here Exams Page", props.isTutor);
    return (
        <ul className="list-group">
            {props.examList.map((exam, idx) => {
                return (
                    <li className="list-group-item" id={exam.exam_id} key={idx}> {exam.exam_name}
                        {!props.isTutor && exam.completed === false ?
                            <button
                                type="button"
                                className={props.isTutor ? "btn btn-info hide" : "btn btn-info"}
                                onClick={() => {
                                    props.getExam({ "exam_id": exam.exam_id});
                                    props.history.push({
                                        pathname: '/takeExam',
                                    })
                                }}
                            >
                                Take Exam
                            </button>
                            :
                            <button
                                type="button"
                                className={props.isTutor ? "btn btn-info hide" : "btn btn-info getSatProSecondaryButton"}
                                onClick={() => {
                                    props.history.push({
                                        pathname: '/viewExam',
                                    })
                                }}
                            >
                                view Exam
                            </button>
                        }
                        <FontAwesomeIcon
                            icon={iconMapping["Trash"]}
                            size="1x"
                            className={props.isTutor ? "" : "hide"}
                            style={{ color: "var(--alert-color)", float: "right" }}
                            onClick={() => props.handleDelete(exam.exam_id)}
                        />
                        <div className="exam_details">
                            <span>{exam.ques_no} Questions</span>
                            <span>Posted On: {exam.published}</span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

class Exams extends Component {

    UNSAFE_componentWillMount() {
        if (this.props.isTutor)
            this.props.getExamListTutor()
        else
            this.props.getExamListStudent({ "mod_id": this.props.selectedModuleId })
    }

    handleDelete = (exam_id) => {
        let reqObject = {
            "model_name": "Exam",
            "model_id": exam_id
        }
        this.props.deleteExam(reqObject)

    }

    render() {
        if (this.props.loading) return <Loading />
        //redirects to Not found page if the getExamsList API fails
        return Object.keys(this.props.examList).length === 0 ? <NotFound /> :
            (
                <div className="dashboard_body">
                    <div className="dashboard_subSection">
                        <div className="quoteWrapper">
                            <FontAwesomeIcon icon={iconMapping["QuoteLeft"]} size="2x" style={{ color: "gray" }} />&nbsp;
                        <span className="quoteContent">Believe you can & you're halfway there </span>
                            <span className="author">- T Roosevelt</span>
                        </div>
                        <ToastContainer />
                        <br />
                        <ExamList {...this.props} 
                        isTutor={this.props.isTutor} 
                        handleDelete={this.handleDelete}
                        getExam={this.props.getExam}
                        />
                        <br />
                        {
                            this.props.isTutor ?
                                <button
                                    type="button"
                                    className="btn btn-info getSatProSecondaryButton"
                                    onClick={() => {
                                        this.props.history.push({
                                            pathname: '/CreateExam',
                                        })
                                    }}>
                                    <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                                    &nbsp;<span>Add Exam</span>
                                </button>
                                : ''
                        }
                    </div>
                </div>
            )
    }
}
export default withRouter(Exams);