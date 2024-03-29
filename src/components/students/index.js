import React, { Component } from 'react';

import Loading from '../loading';

/**
 * Representational component for list of students in the system
 */
class Students extends Component {

    UNSAFE_componentWillMount(){
        //if(Object.keys(this.props.userInfo).length !== 0)
        this.props.getStudentList();
    }
    
    render() {
        if(this.props.loading) return <Loading />

        //redirects to Not found page if the getStudentList API fails

        return Object.keys(this.props.studentList).length === 0? 
        <div>
            Where did all the students go??
        </div>
        :
        (
            <div className="dashboard_body student_body">
                <h2>Student List</h2>
                <div className="dashboard_subSection">
                    <ul className="list-group">
                        {this.props.studentList.map((student, id) => {
                            return <li className="list-group-item" key={id}>
                                <div className="avatar">
                                    {student.fname.charAt(0)}{student.lname.charAt(0)}
                                </div>
                                &nbsp; &nbsp;
                                <span>
                                    {student.fname} {student.lname}
                                </span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}


export default Students