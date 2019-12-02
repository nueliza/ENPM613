import { connect } from 'react-redux';
import ViewUser from '../components/userDetails/viewUserDetails';
import {deleteUser } from "../actions/studentHandler"; 

import { logoutUser } from "../actions/userHandler";

const mapDispatchToProps = (dispatch) => {
    return{
        deleteUser : (payload) =>{dispatch(deleteUser(payload))},
        logoutUser: () => dispatch(logoutUser()),
    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    loading: state.loader.loading,
    userInfo: state.user.userInfo,
    selectedStudent: state.student.selectedStudent
})

export default connect( mapStateToProps,mapDispatchToProps)(ViewUser)