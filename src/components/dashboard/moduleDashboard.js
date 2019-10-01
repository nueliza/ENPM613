import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";


class ModuleDashboard extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <Fragment>
                <div className="modules">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Algebra</h5>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Calculus</h5>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Something</h5>
                        </div>
                    </div>
                </div>
            </Fragment>)
    }
}
export default ModuleDashboard;