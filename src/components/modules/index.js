import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import "./modules.css"
class Modules extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <Fragment>
                <div className="dashboard_header">
                    <h3>Dashboard</h3>
                    <div className="userInfo">
                        <span>Username</span> <br />
                        <span>Last logged In:</span> <br />
                        <Link to="/">Sign out</Link> <br />
                    </div>
                </div>
                <hr />
                <div className="modules">
                    Math
                    </div>
                <div className="modules">
                    English
                    </div>
                <div className="modules">
                    Essay
                    </div>

            </Fragment>)
    }
}
export default Modules;