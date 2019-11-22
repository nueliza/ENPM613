import { connect } from 'react-redux';
import Exams from '../components/exams';

import {getExamListTutor, deleteExam, getExamListStudent} from "../actions/examHandler";


const mapDispatchToProps = (dispatch) => {
    return{
        getExamListTutor : ()=>dispatch(getExamListTutor()),
        deleteExam : (payload) => dispatch(deleteExam(payload)),
        getExamListStudent : (payload)=>dispatch(getExamListStudent(payload)),
    }
}

const mapStateToProps = state => ({
    examList: state.exam.examList,
    loading: state.loader.loading,
})

export default connect( mapStateToProps,mapDispatchToProps)(Exams)