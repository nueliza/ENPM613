import { connect } from 'react-redux';
import Exams from '../components/exams';

import {getExam, submitExam, deleteExam, createExam} from '../actions/examActions';

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    selectedExam: state.exam.selectedExam,
    deleteExamMessage: state.exam.deleteExamMessage,
    createExamMesaage: state.exam.createExamMesaage,
    submitExamMessage: state.exam.submitExamMessage
  })

const mapDispatchToProps = (dispatch) => {
  return{
    getExam: (payload) =>dispatch(getExam(payload)),
    submitExam: (payload) =>dispatch(submitExam(payload)),
    deleteExam: (payload) =>dispatch(deleteExam(payload)),
    createExam: (payload) =>dispatch(createExam(payload))
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(Exams)