import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import {getExamList, getDiscussionList, getGrades, getFiles} from "../actions/dashboardActions";
import {createExam, getExam, submitExam, deleteExam,} from '../actions/examActions';

import { getDiscussion, replyToDiscussion, deleteDiscussion, createDiscussion, deleteReplyToDiscussion } from '../actions/discussionActions';


const mapDispatchToProps = (dispatch) => {
    return{
        getExamList: (payload) => dispatch(getExamList(payload)),
        getDiscussionList: (payload) => dispatch(getDiscussionList(payload)),
        getGrades: (payload) => dispatch(getGrades(payload)),
        getFiles: (payload) => dispatch(getFiles(payload)),
        //Exam
        createExam: (payload) =>dispatch(createExam(payload)),
        getExam: (payload) =>dispatch(getExam(payload)),
        submitExam: (payload) =>dispatch(submitExam(payload)),
        deleteExam: (payload) =>dispatch(deleteExam(payload)),
        //Discussion
        getDiscussion: (payload) =>dispatch(getDiscussion(payload)),
        replyToDiscussion: (payload) =>dispatch(replyToDiscussion(payload)),
        deleteDiscussion: (payload) =>dispatch(deleteDiscussion(payload)),
        createDiscussion: (payload) =>dispatch(createDiscussion(payload)),
        deleteReplyToDiscussion: (payload) =>dispatch(deleteReplyToDiscussion(payload))
    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    selectedModule: state.user.selectedModule,
    examList: state.dashboard.exaList,
    discussionList: state.dashboard.discussionList,
    flashcardSets: state.dashboard.flashcardSets,
    gradesList: state.dashboard.gradesList,
    filesList: state.dashboard.filesList,
    //Discussion
    selectedDiscussion: state.discussion.selectedDiscussion,
    replytToDiscussionMessage: state.discussion.replytToDiscussionMessage,
    deleteDiscussionMessage: state.discussion.deleteDiscussionMessage,
    deleteReplytToDiscussionMessage: state.discussion.deleteReplytToDiscussionMessage,
    createDiscussionMessage: state.discussion.createDiscussionMessage,
    //Exam
    selectedExam: state.exam.selectedExam,
    deleteExamMessage: state.exam.deleteExamMessage,
    createExamMesaage: state.exam.createExamMesaage,
    submitExamMessage: state.exam.submitExamMessage
})

export default connect( mapStateToProps,mapDispatchToProps)(Dashboard)