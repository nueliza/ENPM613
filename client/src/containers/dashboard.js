import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import {getExamList, getDiscussionList, getGrades, getFiles} from "../actions/dashboardActions";
import {createExam} from '../actions/examActions';

import { getDiscussion, replyToDiscussion, deleteDiscussion, createDiscussion, deleteReplyToDiscussion } from '../actions/discussionActions';


const mapDispatchToProps = (dispatch) => {
    return{
        getExamList: (payload) => dispatch(getExamList(payload)),
        getDiscussionList: (payload) => dispatch(getDiscussionList(payload)),
        getGrades: (payload) => dispatch(getGrades(payload)),
        getFiles: (payload) => dispatch(getFiles(payload)),
        //Exam
        createExam: (payload) =>dispatch(createExam(payload)),
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
    selectedModule: state.modules.selectedModule,
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
    createDiscussionMessage: state.discussion.createDiscussionMessage
})

export default connect( mapStateToProps,mapDispatchToProps)(Dashboard)