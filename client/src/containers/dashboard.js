import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import {getExamList, submitExam, createExam } from '../actions/examHandler';
import { getStudentList } from "../actions/studentHandler";

const mapDispatchToProps = (dispatch) => {
    return{
        getStudentList: (payload) => dispatch(getStudentList(payload)),
        getExamList: (payload)=>{}
    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    selectedModule: state.user.selectedModule,
    loading: state.loader.loading
})

export default connect( mapStateToProps,mapDispatchToProps)(Dashboard)