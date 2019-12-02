import React, { Component } from 'react';
import Loading from '../loading';

class ViewUserDetails extends Component{
    constructor(props){
        super(props);
    }

    logout = (e) =>{
        this.props.logoutUser();
    }

    render(){
        if(this.props.loading) return <Loading />
        console.log("Selected user", this.props.selectedStudent)
        return Object.keys(this.props.selectedStudent).length === 0? "Not found" :
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
                                <td  scope="row">{this.props.selectedStudent.fname}</td>
                                <td>{this.props.selectedStudent.fname}</td>
                                <td>{this.props.selectedStudent.fname}</td>
                                <td>{this.props.selectedStudent.fname}</td>
                                <td>{this.props.selectedStudent.fname}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        type="button"
                        className="btn btn-info getSatProSecondaryButton"
                        onClick={() => {
                        }}
                    >
                        Delete <b>{this.props.selectedStudent.username} </b>from the system
                    </button>
                </div>
            </div>
        )
    }
}

export default ViewUserDetails;