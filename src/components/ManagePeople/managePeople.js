import { iconMapping } from "../utils/iconsMapping.js";
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../loading';
import Modal from "react-responsive-modal";
import SecondaryPasswordModal from "../ManagePeople/secondaryPasswordModal";

class ManagePeople extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
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

    onCloseModal = () => {
        this.setState({ showModal: false })
    }

    onOpenModal = () => {
        this.setState({ showModal: true })
    }

    logout = (e) =>{
        this.props.logoutUser();
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
                                        {student.fname.charAt(0).toUpperCase()}{student.lname.charAt(0).toUpperCase()}
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
                                    className="btn btn-info getSatProSecondaryButton"
                                    onClick={() => {
                                        //this.props.getDiscussion({ "discuss_id": discussion.discuss_id })
                                        this.setState({showModal: true})
                                        // this.props.history.push({
                                        //     pathname: '/ViewStudent',
                                        // })
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
                                {tutor.fname.charAt(0).toUpperCase()}{tutor.lname.charAt(0).toUpperCase()}
                            </div>
                            &nbsp; &nbsp;
                            <span>
                                {tutor.fname} {tutor.lname}
                            </span>
                        </li>
                    })}
                </ul>
                <SecondaryPasswordModal 
                    showModal={this.state.showModal}
                    onCloseModal={this.onCloseModal}
                    onOpenModal = {this.onOpenModal}
                />
                </div>
            </div>
        )
    }
}

export default ManagePeople;
