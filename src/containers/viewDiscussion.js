import { connect } from 'react-redux';
import Discussion from '../components/discussions/discussion';

import {replyToDiscussion, getDiscussion} from "../actions/discussionHandler";

const mapDispatchToProps = (dispatch) => {
    return{
        replyToDiscussion: (payload) =>dispatch(replyToDiscussion(payload)),
        getDiscussion: (payload) => dispatch(getDiscussion(payload))
    }
}

const mapStateToProps = state => ({
    selectedDiscussion: state.discussion.selectedDiscussion,
    loading: state.loader.loading,
    userInfo: state.user.userInfo,
})

export default connect( mapStateToProps,mapDispatchToProps)(Discussion)