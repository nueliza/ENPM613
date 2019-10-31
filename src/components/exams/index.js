import React, { Component } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

class Exams extends Component {
    render() {
        const isTutor = this.props.isTutor
        return (
            <div className="dashboard_body exam_body">
                <div className="dashboard_subSection">
                    <h2> Algebra</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Exam 1 <span className="tag newTag"><b>New</b></span><button type="button" className="btn btn-info">Take Exam</button></li>
                        <li className="list-group-item">Exam 2 <button type="button" className="btn btn-info">Take Exam</button></li>
                        <li className="list-group-item">Exam 3 <button type="button" className="btn btn-info">Take Exam</button></li>
                        <li className="list-group-item">Exam 4 <span className="tag notPublishedTag"><FontAwesomeIcon icon={iconMapping["NotPublished"]} size="1x" />&nbsp;<b>Not published</b></span><button type="button" className="btn btn-secondary">Take Exam</button></li>
                    </ul>
                    {isTutor ?
                        <button type="button" className="btn btn-link" onClick={() => {
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
                <div className="dashboard_subSection">
                    <h2> Calculus</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Exam 1 <span className="tag newTag"><b>New</b></span><button type="button" className="btn btn-info">Take Exam</button></li>
                        <li className="list-group-item">Exam 2 <button type="button" className="btn btn-info">Take Exam</button></li>
                        <li className="list-group-item">Exam 3 <button type="button" className="btn btn-info">Take Exam</button></li>
                        <li className="list-group-item">Exam 4 <span className="tag notPublishedTag"><FontAwesomeIcon icon={iconMapping["NotPublished"]} size="1x" />&nbsp;<b>Not published</b></span><button type="button" className="btn btn-secondary">Take Exam</button></li>
                    </ul>
                    {isTutor ?
                        <button type="button" className="btn btn-link" onClick={() => {
                            this.props.history.push({
                                pathname: '/CreateExam',
                                state: { selectedSubModule: 'Calculus' }
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