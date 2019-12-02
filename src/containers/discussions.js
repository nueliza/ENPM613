import { connect } from 'react-redux';
import Discussions from '../components/discussions';

import {getDiscussionListStudent, getDiscussionListTutor, getDiscussion, deleteDiscussion} from "../actions/discussionHandler"

/**
 * Functional compoenent for Discussions page
 */

const mapDispatchToProps = (dispatch) => {
    return{
        getDiscussionListStudent: (payload) =>{ dispatch(getDiscussionListStudent(payload))},
        getDiscussionListTutor: () =>{dispatch(getDiscussionListTutor())},
        getDiscussion: (payload) =>{dispatch(getDiscussion(payload))},
        deleteDiscussion: (payload) => dispatch(deleteDiscussion(payload))
    }
}

const mapStateToProps = state => ({
    discussionList: state.discussion.discussionList,
    loading: state.loader.loading
})

export default connect( mapStateToProps,mapDispatchToProps)(Discussions)