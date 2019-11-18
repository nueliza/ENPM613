import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import {getExamList, submitExam, createExam } from '../actions/examHandler';
import {logoutUser} from "../actions/userHandler";

const mapDispatchToProps = (dispatch) => {
    return{
        logoutUser: ()=>dispatch(logoutUser())
    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    selectedModule: state.user.selectedModule,
    
})

export default connect( mapStateToProps,mapDispatchToProps)(Dashboard)