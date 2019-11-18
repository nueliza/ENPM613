import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modules from '../components/modules';
import AdminDashboard from '../components/AdminDashboard';
import { Redirect } from 'react-router-dom';

import { setSelectedModule } from "../actions";
import { logoutUser, getModulesList } from "../actions/userHandler";

import Loading from "../components/loading";
import NotFound from "../components/NotFound";

class ModuleContainer extends Component {
  UNSAFE_componentWillMount() {
    if (this.props.userInfo.user_type === "Student")
      this.props.getModulesList({ stud_id: this.props.userInfo.user_id });
  }
  render() {
    if (this.props.userInfo.user_type === "Student") {
      if (this.props.loading) return <Loading />
      if (Object.keys(this.props.moduleList).length === 0) return <NotFound />
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
      return <AdminDashboard userInfo={this.props.userInfo} />
    }
    else
      return <Redirect to="/" />
  }
}
const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
  loading: state.loader.loading,
  moduleList: state.user.moduleList
})

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedModule: (modules) => dispatch(setSelectedModule(modules)),
    logoutUser: () => dispatch(logoutUser()),
    getModulesList: (payload) => dispatch(getModulesList(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleContainer)