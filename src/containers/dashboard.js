import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import {getExamList, getDiscussionList, getGrades, getFiles} from "../actions/dashboardActions";

const mapDispatchToProps = (dispatch) => {
    return{
        getExamList: (payload) => dispatch(getExamList(payload)),
        getDiscussionList: (payload) => dispatch(getDiscussionList(payload)),
        getGrades: (payload) => dispatch(getGrades(payload)),
        getFiles: (payload) => dispatch(getFiles(payload)),
    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    selectedModule: state.modules.selectedModule,
    examList: state.dashboard.exaList,
    discussionList: state.dashboard.discussionList,
    flashcardSets: state.dashboard.flashcardSets,
    gradesList: state.dashboard.gradesList,
    filesList: state.dashboard.filesList
})

export default connect( mapStateToProps,mapDispatchToProps)(Dashboard)