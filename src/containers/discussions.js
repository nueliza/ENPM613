import { connect } from 'react-redux';
import Discussions from '../components/discussions';

import { getDiscussion, replyToDiscussion, deleteDiscussion, createDiscussion, deleteReplyToDiscussion } from '../actions/examActions';

const mapStateToProps = state => ({
    selectedDiscussion: state.discussion.selectedDiscussion,
    replytToDiscussionMessage: state.discussion.replytToDiscussionMessage,
    deleteDiscussionMessage: state.discussion.deleteDiscussionMessage,
    deleteReplytToDiscussionMessage: state.discussion.deleteReplytToDiscussionMessage,
    createDiscussionMessage: state.discussion.createDiscussionMessage
})

const mapDispatchToProps = (dispatch) => {
    return {
        getDiscussion: (payload) =>dispatch(getDiscussion(payload)),
        replyToDiscussion: (payload) =>dispatch(replyToDiscussion(payload)),
        deleteDiscussion: (payload) =>dispatch(deleteDiscussion(payload)),
        createDiscussion: (payload) =>dispatch(createDiscussion(payload)),
        deleteReplyToDiscussion: (payload) =>dispatch(deleteReplyToDiscussion(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Exams)