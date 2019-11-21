import { connect } from 'react-redux';
import Exams from '../components/exams';

import {getExamListTutor, deleteExam} from "../actions/examHandler";


const mapDispatchToProps = (dispatch) => {
    return{
        getExamListTutor : ()=>dispatch(getExamListTutor()),
        deleteExam : (payload) => dispatch(deleteExam(payload))
    }
}

const mapStateToProps = state => ({
    examList: state.exam.examList,
    loading: state.loader.loading,
})

export default connect( mapStateToProps,mapDispatchToProps)(Exams)