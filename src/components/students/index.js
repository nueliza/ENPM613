import React, { Component, Fragment } from 'react';


class Students extends Component {

    render() {
        return (
            <div className="dashboard_body student_body">
                <h2>Student List</h2>
                <div className="dashboard_subSection">
                    <ul className="list-group">
                        <li className="list-group-item discussion">Student 1 </li>
                        <li className="list-group-item">Student 2 </li>
                        <li className="list-group-item">Student 3 </li>
                        <li className="list-group-item">Student 4 </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Students;