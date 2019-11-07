import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./containers/login";
import Welcome from "./components/welcome";
import Modules from "./containers/modules";
import Registeration from "./components/registration";
import Dashboard from "./containers/dashboard";
import Header from "./components/header";
import Footer from "./components/footer";
import TakeExam from "./components/exams/takeExam";
import Discussion from "./components/discussions/discussion";
import Files from "./components/files";
import Flashcards from "./components/flashcards";
import CreateDiscussion from "./components/discussions/createDiscussion";
import Grades from "./components/grades";

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

export default App;
