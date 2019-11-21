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
                    <br /> <br />
                    <h3>Exam Name</h3>
                    <div className="questionWrapper">
                        Question 1 : This is the first question
                    <div className="optionsWrapper">
                            Option 1 : This is the first options
                        <br />
                            Option 2 : This is the second optionsWrapper
                        <br />
                            Correct Answer is:  This is the correct answer
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default ViewExam;