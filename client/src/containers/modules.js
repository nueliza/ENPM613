import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modules from '../components/modules';
import AdminDashboard from '../components/AdminDashboard';
import { Redirect } from 'react-router-dom';

import { setSelectedModule, logoutUser } from "../actions/userActions";
import { getFlashcardSets } from "../actions/dashboardActions";

class ModuleContainer extends Component {
  render() {
    console.log("UserInfo", this.props.userInfo)
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
      return <AdminDashboard  /> 
    }
    else
      return <Redirect to ="/" />
  }
}
const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
})

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedModule: (modules) => dispatch(setSelectedModule(modules)),
    getFlashcardSets: (payload) => dispatch(getFlashcardSets(payload)),
    logoutUser: () => dispatch(logoutUser()),
    //getStudentList: (payload) => dispatch(getStudentList(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleContainer)