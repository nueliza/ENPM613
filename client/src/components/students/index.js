import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudentList } from "../../actions/studentHandler";
import Loading from '../loading';
import NotFound from "../NotFound";

class Students extends Component {

    UNSAFE_componentWillMount(){
        this.props.getStudentList();
    }
    render() {
        console.log(this.props.studentList);
        if(this.props.loading) return <Loading />
        //redirects to Not found page if the getStudentList API fails
        return Object.keys(this.props.studentList).length === 0? <NotFound />:
        (
            <div className="dashboard_body student_body">
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
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps =( state) =>{
    return{
        loading: state.loader.loading,
        studentList: state.student.studentList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getStudentList: (payload) => dispatch(getStudentList(payload)),
    }
}
export default connect( mapStateToProps,mapDispatchToProps)(Students)