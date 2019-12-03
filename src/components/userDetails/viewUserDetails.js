import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Loading from '../loading';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Representational component for view user details page
 */
class ViewUserDetails extends Component{
    constructor(props){
        super(props);
    }

    logout = (e) =>{
        this.props.logoutUser();
    }

    render(){
        if(this.props.loading) return <Loading />
        return this.props.selectedStudent.length === ""? "Not found" :
        (
            <div className="dashboard_body student_body">
                <div className="dashboard_header">
                    <h3> Details of {this.props.selectedStudent.fname} </h3>
                   
                    <div className="userInfo">
                        <button className="btn btn-info getSatProSecondaryButton" 
                            style={{float: "right", lineHeight: "35px"}}
                            onClick={() => {
                            this.logout()
                        }}>
                            Sign out
                        </button>
                        <div style={{float: "right", marginRight: "10px"}}>
                            <span style={{fontSize: "22px"}}> <b> Hello, {this.props.userInfo.fname} {this.props.userInfo.lname} !</b></span> <br />
                            <span>Last logged In: </span><span className="bold">{this.props.userInfo.last_logged_in}</span> <br />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="dashboard_subSection">
                    <button
                        type="button"
                        className="btn btn-info getSatProSecondaryButton"
                        onClick={() => {
                            this.props.resetSelectedStudent()
                            this.props.history.push('/ManagePeople')
                        }}
                    >
                        <FontAwesomeIcon icon={iconMapping["back"]} size="1x" />
                        Back to Manage People
                    </button>
                    <br /> <br/>
                    <table className="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Username</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Email id</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td  scope="row">{this.props.selectedStudent.username}</td>
                                <td>{this.props.selectedStudent.fname}</td>
                                <td>{this.props.selectedStudent.lname}</td>
                                <td>{this.props.selectedStudent.phone}</td>
                                <td>{this.props.selectedStudent.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        type="button"
                        className="btn btn-info getSatProSecondaryButton"
                        onClick={() => {
                            this.props.deleteUser({"model_id": this.props.selectedStudent.user_id, "model_name": "User"})
                            .then(()=>{
                                this.props.history.push('/ManagePeople')
                            })
                            
                        }}
                    >
                        <FontAwesomeIcon icon={iconMapping["Trash"]} size="1x" /> &nbsp;
                        Delete <b>{this.props.selectedStudent.fname} {this.props.selectedStudent.lname} </b> from the system
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(ViewUserDetails);