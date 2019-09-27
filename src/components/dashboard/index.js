import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';

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
import { faBook, faFolder, faUserGraduate, faUserEdit, faStar, faComment, faLayerGroup, faChartLine } from '@fortawesome/free-solid-svg-icons';

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
                                        <FontAwesomeIcon icon={faBook} data-tip data-for='modules' size="2x" />
                                        <ReactTooltip id='modules' type='info'class='mySepecialClass' >
                                            <span>All Modules</span>
                                        </ReactTooltip>

                                    </NavIcon>
                                    <NavText>
                                        All Modules
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="files">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faFolder} data-tip data-for='files' size="2x" />
                                        <ReactTooltip id='files' type='info'class='mySepecialClass'>
                                            <span>Files</span>
                                        </ReactTooltip>
                                    </NavIcon>
                                    <NavText>
                                        Files
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="exams">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faUserEdit}  data-tip data-for='exams' size="2x" />
                                        <ReactTooltip id='exams' type='info'class='mySepecialClass'>
                                            <span>Exams</span>
                                        </ReactTooltip>
                                    </NavIcon>
                                    <NavText>
                                        Exams
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="grades">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faChartLine}  data-tip data-for='grades' size="2x" />
                                        <ReactTooltip id='grades' type='info'class='mySepecialClass'>
                                            <span>Grades</span>
                                        </ReactTooltip>
                                    </NavIcon>
                                    <NavText>
                                        Grades
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="students">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faUserGraduate} data-tip data-for='students' size="2x" />
                                        <ReactTooltip id='students' type='info'class='mySepecialClass'>
                                            <span>Students</span>
                                        </ReactTooltip>
                                    </NavIcon>
                                    <NavText>
                                        Students
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="flashcards">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faLayerGroup} data-tip data-for='flashcards' size="2x" />
                                        <ReactTooltip id='flashcards' type='info'class='mySepecialClass'>
                                            <span>Flashcards</span>
                                        </ReactTooltip>
                                    </NavIcon>
                                    <NavText>
                                        Flashcards
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="discussions">
                                    <NavIcon>
                                        <FontAwesomeIcon icon={faComment} data-tip data-for='discussions' size="2x" />
                                        <ReactTooltip id='discussions' type='info' class='mySepecialClass'>
                                            <span>Discussions</span>
                                        </ReactTooltip>
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