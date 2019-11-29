import { iconMapping } from "../utils/iconsMapping.js";
import React, { Component } from 'react';
import { getStudentList } from '../../actions/studentHandler';
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

    UNSAFE_componentWillMount(){
        this.props.getStudentList();
    }

    render(){
        
        //Call API to get list of student.
        //Call API to check whether login is sucessfull and update store.
        //Call API to get list of tutors
        //DONE add delete button to each student
        //Connect API call to delete a student with each delete button
        //Implement secondary login before all of this functionality
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
                            <button type="button" className="btn btn-info">Delete</button>
                        </li>
                    })}
                        <li className="list-group-item">Osama Bin Laden 
                            <FontAwesomeIcon 
                                icon={iconMapping["Trash"]} 
                                size="1x" 
                                className={this .props.isTutor?"": "hide"}
                                style={{color: "var(--alert-color)", float: "right", marginTop: "10px", marginLeft: "10px"}}
                            />
                            <button type="button" className="btn btn-info">Delete</button>
                        </li>
                        <li className="list-group-item">Donald Trump <button type="button" className="btn btn-info">Delete</button></li>
                        <li className="list-group-item">Adolf Hitler <button type="button" className="btn btn-info">Delete</button></li>
                        <li className="list-group-item">Make America Great Again <button type="button" className="btn btn-info">Delete</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getStudentList : ()=>dispatch(getStudentList()),
        logoutUser: () => dispatch(logoutUser()),
    }
}
const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    studentList: state.student.studentList,
    loading: state.loader.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(ManagePeople)
// export default ManagePeople;
