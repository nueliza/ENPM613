import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import math from "./images/math.jpg";
import ToastContainer from "../toast";
import "./modules.css"
import logo from "../dashboard/images/Logo.png";


class Modules extends Component {
    
    logout = (e) =>{
        this.props.logoutUser();
    }


    render() {
        return (
            <Fragment>
                <div className="dashboard_header">
                    <img className="mainLogo" alt="Logo" src={logo} />
                    <h3 style={{paddingTop: "10px", paddingLeft: "10px"}}> Modules </h3>
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

                 <ToastContainer />
               
                <hr />
                <div className="modules">
                    {this.props.moduleList.map((module, id)=>{
                        let progress = module.progress + "%";
                        return(
                            <Link to='/dashboard' onClick={()=>{this.props.setSelectedModule(module.mod_id, module.mod_name)}} className="card" key={id}>
                                <img className="card-img" src={math} alt="Math" />
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: progress, backgroundColor: 'var(--primary-color)' }}><b>{module.progress}%</b></div>
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