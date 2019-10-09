import React, { Component, Fragment } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Exams extends Component {
    render() {
        return (
            <Fragment>
                <div className="dashboard_body">
                    <div className="dashboard_subSection">
                        <h2> Algebra</h2>
                        <ul class="list-group">
                            <li class="list-group-item">Exam 1 <span className="tag newTag"><b>New</b></span><button type="button" className="btn btn-info">Take Exam</button></li>
                            <li class="list-group-item">Exam 2 <button type="button" className="btn btn-info">Take Exam</button></li>
                            <li class="list-group-item">Exam 3 <button type="button" className="btn btn-info">Take Exam</button></li>
                            <li class="list-group-item">Exam 4 <span className="tag notPublishedTag"><FontAwesomeIcon icon={iconMapping["NotPublished"]} size="1x" />&nbsp;<b>Not published</b></span><button type="button" className="btn btn-secondary">Take Exam</button></li>
                        </ul>
                        <button type="button" className="btn btn-link" onClick={() => {
                            this.props.history.push({
                                pathname: '/CreateExam',
                                state: { selectedSubModule: 'Algebra' }
                            })
                        }}>
                            <FontAwesomeIcon icon={iconMapping["Plus"]} size="1x" />
                            &nbsp;Add Exam
                        </button>
                    </div>
                    <div className="dashboard_subSection">
                        <h2> Calculus</h2>
                        <ul class="list-group">
                            <li class="list-group-item">Exam 1 <span className="tag newTag"><b>New</b></span><button type="button" className="btn btn-info">Take Exam</button></li>
                            <li class="list-group-item">Exam 2 <button type="button" className="btn btn-info">Take Exam</button></li>
                            <li class="list-group-item">Exam 3 <button type="button" className="btn btn-info">Take Exam</button></li>
                            <li class="list-group-item">Exam 4 <span className="tag notPublishedTag"><FontAwesomeIcon icon={iconMapping["NotPublished"]} size="1x" />&nbsp;<b>Not published</b></span><button type="button" className="btn btn-secondary">Take Exam</button></li>
                        </ul>
                    </div>
                </div>

            </Fragment>)
    }
}
export default Exams;