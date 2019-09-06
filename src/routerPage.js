import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import HomePage from "./components/homePage";
import "bootstrap/dist/css/bootstrap.min.css";

function RouterPage() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/homePage" component={HomePage} />
    </Router>
  );
}

export default RouterPage;
