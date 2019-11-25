import { connect } from 'react-redux';
import Discussions from '../components/discussions';

import {getDiscussionListStudent, getDiscussionListTutor} from "../actions/discussionHandler"


const mapDispatchToProps = (dispatch) => {
    return{
        getDiscussionListStudent: (payload) =>{ dispatch(getDiscussionListStudent(payload))},
        getDiscussionListTutor: () =>{dispatch(getDiscussionListTutor())}
    }
}

const mapStateToProps = state => ({
    discussionList: state.discussion.discussionList,
})

export default connect( mapStateToProps,mapDispatchToProps)(Discussions)