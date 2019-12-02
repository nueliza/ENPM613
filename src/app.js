import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router';

import Welcome from "./containers/welcome";
import Modules from "./containers/modules";
import Dashboard from "./containers/dashboard";

function PrivateRoute ({component: Component, authed, ...rest}) {
  console.log("PrivateRoute", authed);
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
    let dashboardAuthed = false;
    if(this.props.userInfo.user_type === "Tutor"|| this.props.userInfo.user_type === "Admin"){
      dashboardAuthed = Object.keys(this.props.userInfo).length !== 0 ? true : false;
    }
    else{
      dashboardAuthed = (Object.keys(this.props.userInfo).length !== 0 && 
      this.props.selectedModuleId !== "") ? true : false;
    }
    return (
      <React.Fragment>
        <Router>
          <Route path="/" exact component={Welcome} />  
          <PrivateRoute 
            authed ={Object.keys(this.props.userInfo).length === 0? false : true } 
            path ='/modules' 
            component={Modules} 
          />
          <PrivateRoute 
            authed = {dashboardAuthed}
            path ='/dashboard' 
            component={Dashboard} 
          />
          <PrivateRoute 
            authed={Object.keys(this.props.userInfo).length === 0? false : true } 
            path='/CreateDiscussion' 
            component={Dashboard} 
          />
          <PrivateRoute 
            authed={Object.keys(this.props.userInfo).length === 0? false : true } 
            path='/Discussion' 
            component={Dashboard} 
          />
          <PrivateRoute 
            authed={Object.keys(this.props.userInfo).length === 0? false : true } 
            path='/Discussions' 
            component={Dashboard} />
          <PrivateRoute 
            authed={Object.keys(this.props.userInfo).length === 0? false : true } 
            path='/Exams' 
            component={Dashboard} />
          <PrivateRoute 
            authed={Object.keys(this.props.userInfo).length === 0? false : true } 
            path='/CreateExam' 
            component={Dashboard} />
          <PrivateRoute 
            authed={Object.keys(this.props.userInfo).length === 0? false : true } 
            path='/ViewExam' 
            component={Dashboard} />
          <PrivateRoute 
            authed={Object.keys(this.props.userInfo).length === 0? false : true } 
            path='/TakeExam' 
            component={Dashboard} />
          <PrivateRoute 
            authed={Object.keys(this.props.userInfo).length === 0? false : true } 
            path='/Grades' 
            component={Dashboard} />
          <PrivateRoute 
            authed={Object.keys(this.props.userInfo).length === 0? false : true } 
            path='/Files' 
            component={Dashboard} />
          <PrivateRoute 
            authed={Object.keys(this.props.userInfo).length === 0? false : true } 
            path='/Flashcards' 
            component={Dashboard} />
          <PrivateRoute 
            authed={Object.keys(this.props.userInfo).length === 0? false : true } 
            path='/Students' 
            component={Dashboard} />

          <
        </Router>
      </React.Fragment>
    );
  }
  
}

const mapStateToProps = (state) =>{
  return{
    userInfo : state.user.userInfo,
    selectedModuleId: state.user.selectedModuleId,
  }
}

export default connect(mapStateToProps)(App);
