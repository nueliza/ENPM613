import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './dashboard.css';
import logo from "./images/logo.jpg";

import Discussions from "../discussions";
import Exams from "../exams";
import Files from "../files";
import Flashcards from "../flashcards";
import Grades from "../grades";
import Modules from "../modules";
import Students from "../students";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faFolder, faUserGraduate, faUserEdit, faStar, faComment, faLayerGroup, faBackward } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <Router>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <SideNav
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}
                        >
                            <Link to="/dashboard"><img className="mainLogo" src={logo} /></Link>
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="dashboard">
                                <NavItem eventKey="dashboard">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faBook} size="2x" />
                                    </NavIcon>
                                    <NavText>
                                        All Modules
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="files">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faFolder} size="2x" />
                                    </NavIcon>
                                    <NavText>
                                        Files
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="exams">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faUserEdit} size="2x" />
                                    </NavIcon>
                                    <NavText>
                                        Exams
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="grades">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faStar} size="2x" />
                                    </NavIcon>
                                    <NavText>
                                        Grades
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="students">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faUserGraduate} size="2x" />
                                    </NavIcon>
                                    <NavText>
                                        Students
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="flashcards">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faLayerGroup} size="2x" />
                                    </NavIcon>
                                    <NavText>
                                        Flashcards
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="discussions">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faComment} size="2x" />
                                    </NavIcon>
                                    <NavText>
                                        Discussions
                                    </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                        <main>
                            <div className="dashboard_wrapper">
                                <Route path="/discussions" component={props => <Discussions />} />
                                <Route path="/flashcards" component={props => <Flashcards />} />
                                <Route path="/students" component={props => <Students />} />
                                <Route path="/exams" component={props => <Exams />} />
                                <Route path="/grades" component={props => <Grades />} />
                                <Route path="/dashboard" component={props => <Modules />} />
                                <Route path="/files" component={props => <Files />} />
                            </div>
                        </main>
                    </React.Fragment>
                )}
                />
            </Router>)
    }
}
export default Dashboard;