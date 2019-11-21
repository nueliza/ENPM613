import React, { Component } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import ToastContainer from "../toast";
import Loading from "../loading";
import NotFound from "../NotFound";

const ExamList = (props) => {
    return (
        <ul className="list-group">
            {props.examList.map((exam, idx) =>{
                return(
                    <li className="list-group-item" id={exam.exam_id} key={idx}> {exam.exam_name}
                        <button 
                            type="button" 
                            className={"btn btn-info " + props.isTutor? "hide":""}
                            onClick={() => {
                                props.history.push({
                                    pathname: '/takeExam',
                                })
                            }}
                        >
                            Take Exam
                        </button>
                        <FontAwesomeIcon 
                            icon={iconMapping["Trash"]} 
                            size="1x" 
                            className={props.isTutor?"": "hide"}
                            style={{color: "var(--alert-color)", float: "right"}}
                            onClick={()=>props.handleDelete(exam.exam_id)}
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

    UNSAFE_componentWillMount(){
        if(this.props.isTutor)
            this.props.getExamListTutor()
    }

    handleDelete =(exam_id) =>{
        let reqObject ={
            "model_name": "exam",
            "model_id": exam_id
        }
        this.props.deleteExam(reqObject)

    }

    render() {
        const isTutor = this.props.isTutor;
        if(this.props.loading) return <Loading />
        //redirects to Not found page if the getExamsList API fails
        return Object.keys(this.props.examList).length === 0? <NotFound />:
        (
            <div className="dashboard_body">
                <div className="dashboard_subSection">
                    <div className="quoteWrapper">
                        <FontAwesomeIcon icon={iconMapping["QuoteLeft"]} size="2x" style={{color: "gray"}} />&nbsp;
                        <span className="quoteContent">Believe you can & you're halfway there </span>
                        <span className="author">- T Roosevelt</span>
                    </div>
                    <ToastContainer />
                    <br/>
                    <ExamList {...this.props} isTutor={isTutor} handleDelete={this.handleDelete} />
                    <br />
                    {
                    isTutor ?
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