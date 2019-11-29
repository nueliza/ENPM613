import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import "../modules/modules.css";
import modules from "./images/courses.png";
import peopele from "./images/people.jpg";

class AdminDashboard extends Component {
    logout = (e) =>{
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        return (
            <Fragment>
                <div className="dashboard_header">
                    <h3> Admin dashboard </h3>
                    <div className="userInfo">
                        <span className="bold">Hello, {this.props.userInfo.firstName} {this.props.userInfo.lastName} !</span> <br />
                        <span>Last logged In:</span><span className="bold">{this.props.userInfo.last_logged_in}</span> <br />
                        <a href="/" onClick={this.logout}>Sign out</a>
                    </div>
                </div>
                <hr />
                <div className="modules adminDashboard">
                    <div className="card">
                        <img className="card-img" src={modules} alt="Modules" />
                        <hr />
                        <div className="card-body">
                            <h5 className="card-title">Manage Courses</h5>
                            <ul className="card-text">
                                <li>Add Courses</li>
                                <li>Delete Courses</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src={peopele} alt="People" onClick={()=> this.props.history.push('/managePeople')}/>
                        <hr />
                        <div className="card-body">
                            <h5 className="card-title">Manage People</h5>
                            <ul className="card-text">
                                <li>Remove Students</li>
                                <li>Remove Tutor</li>
                                <li>Assign Tutors to course</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>)
    }
}
export default withRouter(AdminDashboard);