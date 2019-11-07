import React, { Component } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

const ExamList = (props) => {
    return (
        <ul className="list-group">
            <li className="list-group-item">Exam 1
                <button 
                    type="button" 
                    className="btn btn-info"
                    onClick={() => {
                        props.history.push({
                            pathname: '/takeExam',
                        })
                    }}
                >
                    Take Exam
                </button>
            </li>
            <li className="list-group-item">Exam 2
                <button type="button" className="btn btn-info">
                    Take Exam
                </button>
                <div className="exam_details">
                    <span>24 Questions</span>
                    <span>Posted On: 4/11/2019</span>
                </div>
            </li>
            <li className="list-group-item">Exam 3
                <button type="button" className="btn btn-info">
                    Take Exam
                </button>
                <div className="exam_details">
                    <span>24 Questions</span>
                    <span>Posted On: 4/11/2019</span>
                </div>
            </li>
            <li className="list-group-item">Exam 4
                
                <span className="tag notPublishedTag">
                    <FontAwesomeIcon icon={iconMapping["NotPublished"]} size="1x" />&nbsp;
                    <b>Not published</b>
                </span>
                <button type="button" className="btn btn-secondary">
                    Take Exam
                </button>
                <br/>
                <div className="exam_details">
                    <span>24 Questions</span>
                    <span>Posted On: 4/11/2019</span>
                </div>
            </li>
        </ul>
    )
}

class Exams extends Component {

    componentDidMount() {
        //service call to load exam list
    }
    render() {
        const isTutor = this.props.isTutor;
        return (
            <div className="dashboard_body">
                <div className="dashboard_subSection">
                    <div className="quoteWrapper">
                        <span className="quote">"</span>
                        <span className="quoteContent">Believe you can & you're halfway there</span>
                        <span className="quote">"</span>
                        <span className="quoteAuthor">- T Roosevelt</span>
                    </div>
                    <h2> Algebra</h2>
                    <ExamList {...this.props}/>
                    {
                    isTutor ?
                        <button 
                            type="button" 
                            className="btn btn-link" 
                            onClick={() => {
                            this.props.history.push({
                                pathname: '/CreateExam',
                                state: { selectedSubModule: 'Algebra' }
                            })
                        }}>
                            <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                            &nbsp;Add Exam
                        </button>
                    : ''
                    }
                </div>
                <div className="dashboard_subSection">
                    <h2> Calculus</h2>
                    <ExamList {...this.props}/>
                    {isTutor ?
                        <button 
                            type="button" 
                            className="btn btn-link" 
                            onClick={() => {
                            this.props.history.push({
                                pathname: '/CreateExam',
                                state: { selectedSubModule: 'Algebra' }
                            })
                        }}>
                            <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                            &nbsp;Add Exam
                        </button>
                    : ''}
                </div>
            </div>
        )
    }
}
export default withRouter(Exams);