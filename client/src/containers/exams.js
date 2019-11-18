import { connect } from 'react-redux';
import Exams from '../components/exams';

import {getExamListTutor, createExam} from "../actions/examHandler";


const mapDispatchToProps = (dispatch) => {
    return{
        getExamListTutor : ()=>dispatch(getExamListTutor()),
        createExam : (payload) => dispatch(createExam(payload))
    }
}

const mapStateToProps = state => ({
    examList: state.exam.examList,
    loading: state.loader.loading,
})

export default connect( mapStateToProps,mapDispatchToProps)(Exams)