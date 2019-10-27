import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./containers/login";
import Welcome from "./components/welcome";
import Modules from "./containers/modules";
import Registeration from "./components/registration";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Footer from "./components/footer";
import CreateExam from "./components/exams/createExam";

function App() {
  return (
    <React.Fragment>
      
      <Router>
      <Header />
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registeration} />
        <Route path="/modules" component={Modules} />
        <Route path="/dashboard" component={Dashboard} />
      <Route path="/CreateExam" component={props => <CreateExam {...props}/>} />
        {/* <Route path="/files" component={props => <Files />} />  TO be removed, added for development ease
        <Route path="/flashcards" component={props => <Flashcards />} />  TO be removed, added for development ease */}
        <Footer />
      </Router>
     
    </React.Fragment>
  );
}

export default App;
