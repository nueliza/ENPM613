import React, { Component } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./exams.css";

class ViewExam extends Component {

    render() {
        return (
            <div className="dashboard_body view_exam">
                <div className="dashboard_subSection">
                    
                    <br />
                    <h3>Exam Name</h3>
                    <FontAwesomeIcon icon={iconMapping["tick"]}  color="#17a2b8" size="1x" /> Correct Answer &nbsp;
                    <FontAwesomeIcon icon={iconMapping["cross"]}  color="#ee442f" size="1x" /> Wrong Answer
                    <div className="questionWrapper">
                        Question 1 : This is the first question
                    <div className="optionsWrapper">
                        <ul>
                            <li>
                                <div className="itemWrapper">
                                Option 1 <FontAwesomeIcon icon={iconMapping["cross"]}  color="#ee442f" size="1x" />
                                </div>
                            </li> 
                            <li>
                                <div className="itemWrapper">
                                Option 2 <FontAwesomeIcon icon={iconMapping["tick"]}  color="#17a2b8" size="1x" />
                                </div>
                            </li> 
                        </ul>
                    </div>
                    </div>
                    <br />
                    <button
                        type="button"
                        className="btn btn-info getSatProSecondaryButton"
                        onClick={() => {
                            this.props.history.push({
                                pathname: '/CreateExam',
                            })
                        }}>
                        <FontAwesomeIcon icon={iconMapping["back"]} size="1x" />
                        &nbsp;<span>Back to Exams</span>
                    </button>
                </div>
            </div>
        )
    }

}
export default ViewExam;