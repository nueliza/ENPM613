import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Welcome from "./components/welcome";
import Dashboard from "./components/dashboard";
import Registeration from "./components/registration";
import "bootstrap/dist/css/bootstrap.min.css";

function RouterPage() {
  return (
    <Router>
      <Route path="/" exact component={Welcome} />
      <Route path="/login" component={Login}/>
      <Route path="/registration" component={Registeration}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Router>
  );
}

export default RouterPage;
