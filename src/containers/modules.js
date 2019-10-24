import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modules from '../components/modules';
import AdminDashboard from '../components/AdminDashboard';
import { Redirect } from 'react-router-dom';



class ModuleContainer extends Component {
  render() {
    if (this.props.userInfo.type == "Student")
      return <Modules {...this.props} />
    else if (this.props.userInfo.type == "Tutor") {
      return <Redirect to={{
        pathname: '/dashboard',
        state: { isTutor: true, userInfo: this.props.userInfo}
      }} />
    }
    else {
      return <AdminDashboard />
    }
  }

}
const mapStateToProps = state => ({
  userInfo: state.user.userInfo
})

export default connect(mapStateToProps,
)(ModuleContainer)