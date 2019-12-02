import { connect } from 'react-redux';
import Students from '../components/students';
import { getStudentList } from "../actions/studentHandler";

/**
 * Functional compoenent for Students page
 */

const mapStateToProps =( state) =>{
    return{
        loading: state.loader.loading,
        userInfo: state.user.userInfo,
        studentList: state.student.studentList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getStudentList: (payload) => dispatch(getStudentList(payload)),
    }
}

export default connect( mapStateToProps,mapDispatchToProps)(Students)