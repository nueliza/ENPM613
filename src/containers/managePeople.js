import { connect } from 'react-redux';
import ManagePeople from '../components/ManagePeople/managePeople';
import { getStudentList, getTutorsList, deleteUser } from '../actions/studentHandler';
import { logoutUser } from "../actions/userHandler";

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

export default connect( mapStateToProps,mapDispatchToProps)(ManagePeople)