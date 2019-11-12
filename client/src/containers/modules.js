import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modules from '../components/modules';
import AdminDashboard from '../components/AdminDashboard';
import { Redirect } from 'react-router-dom';
import Loading from '../components/loading';

import { setSelectedModule, logoutUser } from "../actions/userActions";
import { getFlashcardSets } from "../actions/dashboardActions";
import { resetToast } from "../actions/actions";

class ModuleContainer extends Component {
  render() {
    if (this.props.userInfo.user_type === "Student") {
      return <Modules
        userInfo={this.props.userInfo}
        setSelectedModule={this.props.setSelectedModule}
        logoutUser={this.props.logoutUser}
        toastMessage={this.props.toastMessage}
        resetToast={this.props.resetToast}
      />
    }
    else if (this.props.userInfo.user_type === "Tutor") {
      return <Redirect to={{
        pathname: '/dashboard'
      }} />
    }
    else if (this.props.userInfo.user_type === "Admin") {
      return <AdminDashboard />
    }
    else
      return <Loading show={true} />
  }
}
const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
  loginPending: state.user.loginPending,
  toastMessage: state.toast.toastMessage
})

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedModule: (modules) => dispatch(setSelectedModule(modules)),
    getFlashcardSets: (payload) => dispatch(getFlashcardSets(payload)),
    logoutUser: () => dispatch(logoutUser()),
    resetToast: () => dispatch(resetToast())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleContainer)