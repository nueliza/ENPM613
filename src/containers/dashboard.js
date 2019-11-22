import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import {logoutUser} from "../actions/userHandler";
import {createDiscussion} from "../actions/discussionHandler";
import { getExam, submitExam } from '../actions/examHandler';

const mapDispatchToProps = (dispatch) => {
    return{
        logoutUser: ()=>dispatch(logoutUser()),
        createDiscussion: (payload) =>(dispatch(createDiscussion(payload))),
        getExam: (payload) =>(dispatch(getExam(payload))),
        submitExam: (payload) => (dispatch(submitExam(payload)))
    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    selectedModuleId: state.user.selectedModuleId,
    selectedModuleName: state.user.selectedModuleName,
    selectedExam:  state.exam.selectedExam,
    selectedExamName: state.exam.selectedExamName,
    selectedExamId: state.exam.selectedExamId,
})

export default connect( mapStateToProps,mapDispatchToProps)(Dashboard)