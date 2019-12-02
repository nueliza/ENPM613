import { connect } from 'react-redux';
import AdminDashboard from '../components/AdminDashboard';
import {logoutUser} from "../actions/userHandler";

/**
 * 
 * Functional component for Admin Dashboard
 */

const mapDispatchToProps = (dispatch) => {
    return{
        logoutUser: ()=>dispatch(logoutUser())
    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
})

export default connect( mapStateToProps,mapDispatchToProps)(AdminDashboard)