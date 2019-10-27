import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

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
                        <span>Username | </span><span>Last logged In:</span> <br />
                        <Link to="/">Sign out</Link>
                    </div>
                </div>
                <hr />
                <div className="modules">
                    <div className="card" onClick={() => {
                        this.props.history.push({
                            pathname: '/dashboard',
                            state: { selectedModule: 'Math', userInfo: this.props.userInfo}
                        })
                    }}>
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
                    </div>
                    <div className="card" onClick={() => {
                        this.props.history.push({
                            pathname: '/dashboard',
                            state: { selectedModule: 'English', userInfo: this.props.userInfo }
                        })
                    }}>
                        <img className="card-img" src={english} alt="English" />
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
                    </div>
                    <div className="card" onClick={() => {
                        this.props.history.push({
                            pathname: '/dashboard',
                            state: { selectedModule: 'Essay Writing', userInfo: this.props.userInfo }
                        })
                    }}>
                        <img className="card-img" src={writing} alt="Writing" />
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '75%', backgroundColor: 'purple' }}><b>75%</b></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Essay Writing</h5>
                            <ul className="card-text">
                                <li>Formats</li>
                                <li>Blah Blah</li>
                            </ul>
                        </div>
                    </div>
                    data: {this.props.data}
                </div>

            </Fragment>)
    }
}
export default Modules;