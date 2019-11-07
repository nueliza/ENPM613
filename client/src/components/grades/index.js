import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconMapping } from "../utils/iconsMapping.js";
import "./grades.css";

class Grades extends Component {

    render() {
        return (
            <div className="dashboard_body grades_body">
                <div className="dashboard_subSection">
                    <div className="quoteWrapper">
                        <FontAwesomeIcon icon={iconMapping["QuoteLeft"]} size="2x" style={{color: "gray"}} />&nbsp;
                        <span className="quoteContent">Perpetual optimism is a force multiplier </span>
                        <span className="author">- Unknown</span>
                    </div>
                    <br />
                    <ul className="list-group">
                        <li className="list-group-item">Exam 1 <span className="Score"> Score:  23</span><button type="button" className="btn btn-info">View Answers</button></li>
                        <li className="list-group-item">Exam 1 <span className="Score"> Score:  23</span><button type="button" className="btn btn-info">View Answers</button></li>
                        <li className="list-group-item">Exam 1 <span className="Score"> Score:  23</span><button type="button" className="btn btn-info">View Answers</button></li>
                        <li className="list-group-item">Exam 1 <span className="Score"> Score:  23</span><button type="button" className="btn btn-info">View Answers</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Grades;