import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import {logoutUser} from "../actions/userHandler";
import {createDiscussion} from "../actions/discussionHandler";

/**
 * 
 * Functional component for student dahsboard
 */

const mapDispatchToProps = (dispatch) => {
    return{
        logoutUser: ()=>dispatch(logoutUser()),
        createDiscussion: (payload) =>(dispatch(createDiscussion(payload)))
    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    selectedModuleId: state.user.selectedModuleId,
    selectedModuleName: state.user.selectedModuleName,
    selectedDiscussion: state.discussion.selectedDiscussion,
    
    //loading: state.loader.loading
})

export default connect( mapStateToProps,mapDispatchToProps)(Dashboard)