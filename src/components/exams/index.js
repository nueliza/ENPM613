import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit} from '@fortawesome/free-solid-svg-icons';

class Exams extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <Fragment>
                 <div className="dashboard_header">
                 <FontAwesomeIcon icon={faUserEdit} size="2x" /> &nbsp;<h3>Exams</h3>
                    <div className="userInfo">
                        <span>Username</span>&nbsp;|&nbsp;<span>Last logged In:</span> <br/>
                        <Link to="/">Sign out</Link> 
                    </div>
                </div>
                <hr />
                <ul class="list-group">
                    <li class="list-group-item">Exam 1 <span className="tag newTag"><b>New</b></span><button type="button" className="btn btn-info">Take Exam</button></li>
                    <li class="list-group-item">Exam 2 <button type="button" className="btn btn-info">Take Exam</button></li>
                    <li class="list-group-item">Exam 3 <button type="button" className="btn btn-info">Take Exam</button></li>
                    <li class="list-group-item">Exam 4 <span className="tag notPublishedTag"><b>Not published</b></span><button type="button" className="btn btn-secondary">Take Exam</button></li>
                </ul>
            </Fragment>)
    }
}
export default Exams;