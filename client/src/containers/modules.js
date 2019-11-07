import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modules from '../components/modules';
import AdminDashboard from '../components/AdminDashboard';
import { Redirect } from 'react-router-dom';

import { setSelectedModule } from "../actions/moduleActions";
import { getFlashcardSets } from "../actions/dashboardActions";

class ModuleContainer extends Component {
  render() {
    if (this.props.userInfo.userType === "Student") {
      return <Modules
              userInfo={this.props.userInfo}
              setSelectedModule={this.props.setSelectedModule}
            />
    }
    else if (this.props.userInfo.userType === "Tutor") {
      return <Redirect to={{
                pathname: '/dashboard'
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

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedModule: (modules) => dispatch(setSelectedModule(modules)),
    getFlashcardSets: (payload) =>dispatch(getFlashcardSets(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleContainer)