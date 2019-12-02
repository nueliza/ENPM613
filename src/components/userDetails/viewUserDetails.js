import React, { Component } from 'react';


class ViewUserDetails extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="dashboard_body student_body">
                <div className="dashboard_header">
                    <h3> Student Details </h3>
                   
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
                    
                </div>
            </div>
        )
    }
}

export default ViewUserDetails;