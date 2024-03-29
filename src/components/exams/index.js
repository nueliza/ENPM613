import React, { Component, Fragment } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import ToastContainer from "../toast";
import Loading from "../loading";
/**
 * Representational component to show the list of exams.
 * Tutors can delete a selected exam. Tutors can also navigate to create exam page from here.
 * Students are take the exams which are not yet completed. They also view their answers for the submitted exams
 */
const ExamList = (props) => {
    return (
        <ul className="list-group">
            {props.examList.map((exam, idx) => {
                return (
                    <li className="list-group-item" id={exam.exam_id} key={idx}> {exam.exam_name}
                        <FontAwesomeIcon
                            icon={iconMapping["Trash"]}
                            size="1x"
                            data-tip data-for='Delete'
                            className={props.isTutor ? "" : "hide"}
                            style={{ color: "var(--alert-color)", float: "right", marginLeft: "10px", cursor: "pointer"}}
                            onClick={() => props.handleDelete(exam.exam_id)}
                        />
                         <ReactTooltip id='Delete' type='info' className='mySepecialClass' >
                            <span>Delete</span>
                        </ReactTooltip> 
                        {!props.isTutor && exam.completed === false ?
                            <button
                                type="button"
                                className={props.isTutor ? "btn btn-info hide" : "btn btn-info"}
                                onClick={() => {
                                    props.getExam({ "exam_id": exam.exam_id });
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
                                className="btn btn-info getSatProSecondaryButton"
                                onClick={() => {
                                    props.getExam({ "exam_id": exam.exam_id });
                                    props.history.push({
                                        pathname: '/viewExam',
                                        state: {
                                            from: "Exams"
                                        }
                                    })
                                }}
                            >
                                view Exam
                            </button>
                        }

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
            .then(() => {
                if (this.props.isTutor)
                    this.props.getExamListTutor()
                else
                    this.props.getExamListStudent({ "mod_id": this.props.selectedModuleId })
            })
    }

    render() {
        if (this.props.loading) return <Loading />
        return (
            <div className="dashboard_body">
                <div className="dashboard_subSection">
                    <div className="quoteWrapper">
                        <FontAwesomeIcon icon={iconMapping["QuoteLeft"]} size="2x" style={{ color: "gray" }} />&nbsp;
                    <span className="quoteContent">Believe you can & you're halfway there </span>
                        <span className="author">- T Roosevelt</span>
                    </div>
                    <ToastContainer />
                    <br />
                    {Object.keys(this.props.examList).length === 0 ?
                        <Fragment>
                            <FontAwesomeIcon icon={iconMapping["glass"]} color="gray" size="7x" /> <br /><br />
                            Hallelujah! No exams yet! <br /><br />
                        </Fragment>
                        :
                        <ExamList {...this.props}
                            isTutor={this.props.isTutor}
                            handleDelete={this.handleDelete}
                            getExam={this.props.getExam}
                        />
                    }
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