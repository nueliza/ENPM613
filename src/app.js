import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router';

import Welcome from "./containers/welcome";
import Modules from "./containers/modules";
import Dashboard from "./containers/dashboard";
import ViewExam from "./components/exams/viewExam";
import Discussion from "./components/discussions/discussion";
import Files from "./components/files";
import Flashcards from "./components/flashcards";
import CreateDiscussion from "./components/discussions/createDiscussion";
import Grades from "./containers/grades";

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => 
        authed === true
        ? <Component {...props} />
        : <Redirect to="/" />
      }
    />
  )
}

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        
        <Router>
          <Route path="/" exact component={Welcome} />  
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/modules' component={Modules} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/dashboard' component={Dashboard} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/CreateDiscussion' component={Dashboard} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/Discussion' component={Dashboard} />
          {/* <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/Disucssions' component={Modules} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/Exams' component={Modules} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/TakeExam' component={Modules} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/CreateExam' component={Modules} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/ViewExam' component={Modules} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/Grades' component={Modules} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/Files' component={Modules} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/Flashcards' component={Modules} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/Students' component={Modules} /> */}
        </Router>
       
      </React.Fragment>
    );
  }
  
}

const mapStateToProps = (state) =>{
  return{
    userInfo : state.user.userInfo,
    loginError: state.user.loginError
  }
}

export default connect(mapStateToProps)(App);
