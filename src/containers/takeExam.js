import { connect } from 'react-redux';
import TakeExam from '../components/exams/takeExam';

import { submitExam } from '../actions/examHandler';

/**
 * Functional compoenent for Take Exam page
 */

const mapDispatchToProps = (dispatch) => {
    return{
        submitExam: (payload) => (dispatch(submitExam(payload))),
    }
}

const mapStateToProps = state => ({
    selectedExam:  state.exam.selectedExam,
    selectedExamName: state.exam.selectedExamName,
    selectedExamId: state.exam.selectedExamId,
    loading: state.loader.loading
})

export default connect( mapStateToProps,mapDispatchToProps)(TakeExam)