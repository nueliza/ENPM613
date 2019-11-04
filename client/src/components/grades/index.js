import React, { Component} from 'react';
import "./grades.css";

class Grades extends Component {

    render() {
        return (
            <div className="dashboard_body grades_body">
                <div className="dashboard_subSection">
                    <h2>Algebra</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Exam 1 <span className="Score"> Score:  23</span><button type="button" className="btn btn-info">View Answers</button></li>
                        <li className="list-group-item">Exam 1 <span className="Score"> Score:  23</span><button type="button" className="btn btn-info">View Answers</button></li>
                        <li className="list-group-item">Exam 1 <span className="Score"> Score:  23</span><button type="button" className="btn btn-info">View Answers</button></li>
                        <li className="list-group-item">Exam 1 <span className="Score"> Score:  23</span><button type="button" className="btn btn-info">View Answers</button></li>
                    </ul>
                </div>
                <div className="dashboard_subSection">
                    <h2>Calculus</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Exam 1 <span className="Score"> Score:  23</span><button type="button" className="btn btn-info">View Answers</button></li>
                        <li className="list-group-item">Exam 1 <span className="Score"> Score:  23</span><button type="button" className="btn btn-info">View Answers</button></li>
                        <li className="list-group-item">Exam 1 <span className="Score"> Score:  23</span><button type="button" className="btn btn-info">View Answers</button></li>
                        <li className="list-group-item">Exam 1 <span className="Score"> Score:  23</span><button type="button" className="btn btn-info">View Answers</button></li>
                    </ul>
                </div>
                <div className="dashboard_subSection">
                    <h2>Algebra</h2>
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