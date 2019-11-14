import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import {getExamList, submitExam, createExam } from '../actions/examHandler';

const mapDispatchToProps = (dispatch) => {
    return{
    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    selectedModule: state.user.selectedModule,
})

export default connect( mapStateToProps,mapDispatchToProps)(Dashboard)