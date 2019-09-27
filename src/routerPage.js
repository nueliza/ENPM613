import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Welcome from "./components/welcome";
import Dashboard from "./components/dashboard";
import Registeration from "./components/registration";
import Files from "./components/files";


function RouterPage() {
  return (
    <Router>
      <Route path="/" exact component={Welcome} />
      <Route path="/login" component={Login}/>
      <Route path="/registration" component={Registeration}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/files" component={props => <Files />} />
    </Router>
  );
}

export default RouterPage;
