import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modules from '../components/modules';
import AdminDashboard from '../components/AdminDashboard';
import { Redirect } from 'react-router-dom';
import Loading from '../components/loading';

import { setSelectedModule, logoutUser } from "../actions/userActions";
import { getFlashcardSets } from "../actions/dashboardActions";

class ModuleContainer extends Component {
  render() {
    console.log("Modules Container", this.props.loginPending)
    if (this.props.userInfo.user_type === "Student") {
      return <Modules
        userInfo={this.props.userInfo}
        setSelectedModule={this.props.setSelectedModule}
        logoutUser={this.props.logoutUser}
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
})

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedModule: (modules) => dispatch(setSelectedModule(modules)),
    getFlashcardSets: (payload) => dispatch(getFlashcardSets(payload)),
    logoutUser: () => dispatch(logoutUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleContainer)