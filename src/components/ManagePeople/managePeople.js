import { iconMapping } from "../utils/iconsMapping.js";
import React, { Component } from 'react';
import { getStudentList, getTutorsList, deleteUser } from '../../actions/studentHandler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
import Loading from '../loading';
import { logoutUser } from "../../actions/userHandler";

class ManagePeople extends Component {

    constructor(props) {
        super(props);
    }

    logout = (e) =>{
        e.preventDefault();
        this.props.logoutUser();
    }

    handleDelete = (user_id) => {
        let reqObject = {
            "model_name": "Student",
            "model_id": user_id
        }
        this.props.deleteUser(reqObject)
    }

    UNSAFE_componentWillMount(){
        this.props.getStudentList();
        this.props.getTutorsList();
    }

    render(){
        
        if(this.props.loading) return <Loading />

        //redirects to Not found page if the getStudentList API fails
        return Object.keys(this.props.studentList).length === 0? 
        <div>
            Where did all the students go??
        </div>
        :
        (
            <div className="dashboard_body student_body">
                <div className="dashboard_header">
                    <h3> Manage People </h3>
                   
                    <div className="userInfo">
                        <span className="bold">Hello, {this.props.userInfo.fname} {this.props.userInfo.lname} !</span> <br />
                        <span>Last logged In:</span><span className="bold">{this.props.userInfo.last_logged_in}</span> <br />
                        <a href="/" onClick={this.logout}>Sign out</a>
                    </div>
                    
                </div>
                <hr/>
                <div className="quoteWrapper">
                        <FontAwesomeIcon icon={iconMapping["QuoteLeft"]} size="2x" style={{color: "gray"}} />&nbsp;
                        <span className="quoteContent">Look around you, and all you will see are people the world would be better off without. </span>
                        <span className="author">- Light Yagami</span>
                </div>
                <br />
                <h2>Student List</h2>
                <div className="dashboard_subSection">
                <ul className="list-group">
                    {this.props.studentList.map((student, id) => {
                        return <li className="list-group-item" key={id}>
                                    <div className="avatar">
                                        {student.fname.charAt(0)}{student.lname.charAt(0)}
                                    </div>
                                    &nbsp; &nbsp;
                                    <span>
                                        {student.fname} {student.lname}
                                    </span>
                                    <FontAwesomeIcon
                                    icon={iconMapping["Trash"]}
                                    size="1x"
                                    style={{ color: "var(--alert-color)", float: "right", marginLeft: "10px" }}
                                    onClick={() => this.handleDelete(student.user_id)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-info"
                                    onClick={() => {
                                        //this.props.getDiscussion({ "discuss_id": discussion.discuss_id })
                                        this.props.history.push({
                                            pathname: '/ViewStudent',
                                        })
                                    }}
                                >
                                    View Details
                                </button>
                            </li>
                    })}
                </ul>
                <br/>
                <h2>Tutor List</h2>
                <ul className="list-group">
                    
                    { (this.props.tutorList) && this.props.tutorList.map((tutor, id) => {
                        return <li className="list-group-item" key={id}>
                             <div className="avatar">
                                {tutor.fname.charAt(0)}{tutor.lname.charAt(0)}
                            </div>
                            &nbsp; &nbsp;
                            <span>
                                {tutor.fname} {tutor.lname}
                            </span>
                        </li>
                    })}
                </ul>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getStudentList : ()=> dispatch(getStudentList()),
        getTutorsList: ()=> dispatch(getTutorsList()),
        deleteUser: (user_id)=>dispatch(deleteUser(user_id)),
        logoutUser: () => dispatch(logoutUser()),
    }
}
const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    studentList: state.student.studentList,
    tutorList: state.student.tutorList,
    loading: state.loader.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(ManagePeople)
// export default ManagePeople;
