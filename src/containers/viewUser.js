import { connect } from 'react-redux';
import ViewUser from '../components/userDetails/viewUserDetails';
import {deleteUser } from "../actions/studentHandler"; 

import { logoutUser } from "../actions/userHandler";
import {resetSelectedStudent} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return{
        
        logoutUser: () => dispatch(logoutUser()),
        resetSelectedStudent: () =>dispatch(resetSelectedStudent()),
        deleteUser : (payload) =>dispatch(deleteUser(payload)),

    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    loading: state.loader.loading,
    selectedStudent: state.student.selectedStudent
})

export default connect( mapStateToProps,mapDispatchToProps)(ViewUser)