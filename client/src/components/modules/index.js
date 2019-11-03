import React, { Component, Fragment } from 'react';
import { Link, Redirect } from "react-router-dom";

import math from "./images/math.jpg";
import english from "./images/english.jpg";
import writing from "./images/writing.jpg";

import "./modules.css"
class Modules extends Component {
    render() {
        return (
            <Fragment>
                <div className="dashboard_header">
                    <h3> Main dashboard </h3>
                    <div className="userInfo">
                        <span >Username: </span><span className="bold">{this.props.userInfo.username}</span> <br />
                        <span>Last logged In:</span><span className="bold">{this.props.userInfo.last_logged_in}</span> <br />
                        <Link to ='/'>Sign out</Link>
                    </div>
                </div>
                <hr />
                <div className="modules">
                    
                    <Link to='/dashboard' onClick={()=>{this.props.setSelectedModule("Math")}} className="card">
                        <img className="card-img" src={math} alt="Math" />
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '25%', backgroundColor: 'purple' }}><b>25%</b></div>
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
                            <div className="progress-bar" style={{ width: '50%', backgroundColor: 'purple' }}><b>50%</b></div>
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
                            <div className="progress-bar" style={{ width: '50%', backgroundColor: 'purple' }}><b>50%</b></div>
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
export default Modules;