import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./containers/login";
import Welcome from "./components/welcome";
import Modules from "./containers/modules";
import Registeration from "./components/registration";
import Files from "./components/files";
import Dashboard from "./components/dashboard";
import Flashcards from "./components/flashcards";

function App() {
  return (
    <React.Fragment>
      <div>HEADER</div>
      <Router>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registeration} />
        <Route path="/modules" component={Modules} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/files" component={props => <Files />} />
        <Route path="/flashcards" component={props => <Flashcards />} />
      </Router>
      <div>FOOTER</div>
    </React.Fragment>
  );
}

export default App;
