import { connect } from 'react-redux';
import Discussions from '../components/discussions';

import {getDiscussionListStudent} from "../actions/discussionHandler"


const mapDispatchToProps = (dispatch) => {
    return{
        getDiscussionListStudent: (payload) =>{ dispatch(getDiscussionListStudent(payload))}
    }
}

const mapStateToProps = state => ({
    discussionList: state.discussion.discussionList,
    loading: state.loader.loading,
    
})

export default connect( mapStateToProps,mapDispatchToProps)(Discussions)