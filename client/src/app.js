import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router';

import Welcome from "./containers/welcome";
import Modules from "./containers/modules";
import Dashboard from "./containers/dashboard";
import Header from "./components/header";
import Footer from "./components/footer";
import TakeExam from "./components/exams/takeExam";
import Discussion from "./components/discussions/discussion";
import Files from "./components/files";
import Flashcards from "./components/flashcards";
import CreateDiscussion from "./components/discussions/createDiscussion";
import Grades from "./components/grades";

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to="/" />}
    />
  )
}

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        
        <Router>
          <Header />
          <Route path="/" exact component={Welcome} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/modules' component={Modules} />
          <PrivateRoute authed={Object.keys(this.props.userInfo).length === 0? false : true } path='/dashboard' component={Dashboard} />
  
  
          <Route path="/CreateDiscussion" component={props => <CreateDiscussion {...props}/>} /> {/**TODO removed after development */}
          <Route path="/takeExam" component={props => <TakeExam {...props}/>} /> {/**TODO removed after development */}
          <Route path="/discussion" component={props => <Discussion {...props}/>} /> {/**TODO removed after development */}
          <Route path="/files" component={props => <Files />} /> {/**TODO removed after development */}
          <Route path="/grades" component={props => <Grades />} /> {/**TODO be removed after development */}
          <Route path="/flashcards" component={props => <Flashcards />} />  {/**TODO be removed after development */}
          <Footer />
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
