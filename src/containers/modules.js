import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modules from '../components/modules';
import AdminDashboard from '../containers/adminDashboard';
import { Redirect } from 'react-router-dom';

import { setSelectedModule } from "../actions";
import { logoutUser } from "../actions/userHandler";
import { getModulesList } from "../actions/studentHandler";
import Loading from "../components/loading";
import NotFound from "../components/NotFound";

class ModuleContainer extends Component {
  UNSAFE_componentWillMount() {
    if (this.props.userInfo.user_type === "Student")
      this.props.getModulesList({"user_id": this.props.userInfo.user_id});
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
      return <AdminDashboard/>
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