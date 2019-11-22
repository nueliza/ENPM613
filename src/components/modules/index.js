import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import math from "./images/math.jpg";
import ToastContainer from "../toast";
import "./modules.css"


class Modules extends Component {
    
    logout = (e) =>{
        e.preventDefault();
        this.props.logoutUser();
    }


    render() {
        return (
            <Fragment>
                <div className="dashboard_header">
                    <h3> Main dashboard </h3>
                    <div className="userInfo">
                        <span className="bold">Hello, {this.props.userInfo.fname} {this.props.userInfo.lname} !</span> <br />
                        <span>Last logged In:</span><span className="bold">{this.props.userInfo.last_logged_in}</span> <br />
                        <a href="/" onClick={this.logout}>Sign out</a>
                    </div>
                </div>

                 <ToastContainer />
               
                <hr />
                <div className="modules">
                    {this.props.moduleList.map((module, id)=>{
                        return(
                            <Link to='/dashboard' onClick={()=>{this.props.setSelectedModule(module.mod_id, module.mod_name)}} className="card">
                                <img className="card-img" src={math} alt="Math" />
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: module.progress, backgroundColor: 'var(--primary-color)' }}><b>${module.progress}%</b></div>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">{module.mod_name}</h1>
                                    
                                </div>
                            </Link>
                        )
                    })}
                </div>

            </Fragment>)
    }
}
export default withRouter(Modules);