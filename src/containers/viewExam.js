import { connect } from 'react-redux';
import ViewExam from '../components/exams/viewExam';

import {replyToDiscussion, getDiscussion} from "../actions/discussionHandler";


/**
 * Functional compoenent for View Exam page
 */

const mapDispatchToProps = (dispatch) => {
    return{
        replyToDiscussion: (payload) =>dispatch(replyToDiscussion(payload)),
        getDiscussion: (payload) => dispatch(getDiscussion(payload))
    }
}

const mapStateToProps = state => ({
    loading: state.loader.loading,
    selectedExam:  state.exam.selectedExam,
    selectedExamName: state.exam.selectedExamName,
    selectedExamId: state.exam.selectedExamId,
    selectedExamScore: state.exam.selectedExamScore,
})

export default connect( mapStateToProps,mapDispatchToProps)(ViewExam)