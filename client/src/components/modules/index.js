import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import math from "./images/math.jpg";
import ToastContainer from "../toast";
import "./modules.css"


class Modules extends Component {
    render() {
        return (
            <Fragment>
                <div className="dashboard_header">
                    <h3> Main dashboard </h3>
                    <div className="userInfo">
                        <span className="bold">Hello, {this.props.userInfo.first_name} {this.props.userInfo.last_name} !</span> <br />
                        <span>Last logged In:</span><span className="bold">{this.props.userInfo.last_logged_in}</span> <br />
                        <Link to="/">Sign out</Link>
                    </div>
                </div>

                 <ToastContainer />
               
                <hr />
                <div className="modules">
                    
                    <Link to='/dashboard' onClick={()=>{this.props.setSelectedModule("Math")}} className="card">
                        <img className="card-img" src={math} alt="Math" />
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '25%', backgroundColor: 'var(--primary-color)' }}><b>25%</b></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Math</h5>
                            <ul className="card-text">
                                <li>Algebra</li>
                                <li>Calculus</li>
                            </ul>
                        </div>
                    </Link>

                    <Link to='/dashboard' onClick={()=>{this.props.setSelectedModule("English")}} className="card">
                        <img className="card-img" src={math} alt="English" />
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '50%', backgroundColor: 'var(--primary-color)' }}><b>50%</b></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">English</h5>
                            <ul className="card-text">
                                <li>Grammar</li>
                                <li>Vocabulary</li>
                            </ul>
                        </div>
                    </Link>

                    <Link to='/dashboard' onClick={()=>{this.props.setSelectedModule("Essay Writing")}} className="card">
                        <img className="card-img" src={math} alt="Writing" />
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '50%', backgroundColor: 'var(--primary-color)' }}><b>50%</b></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">English</h5>
                            <ul className="card-text">
                                <li>Formats</li>
                                <li>Blah Blah</li>
                            </ul>
                        </div>
                    </Link>
                </div>

            </Fragment>)
    }
}
export default withRouter(Modules);