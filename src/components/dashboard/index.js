import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';

import './dashboard.css';
import logo from "./images/logo.jpg";

import Discussions from "../discussions";
import Exams from "../exams";
import CreateExam from "../exams/createExam";
import Files from "../files";
import Flashcards from "../flashcards";
import Grades from "../grades";
import FlashcardSet from "./flashcardSet";
import Students from "../students";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpened: false,
            selectedTab: 'Dashboard',
        }

    }

    render() {
        console.log("My Props,", this.props.location)
        const isTutor = this.props.location.state.isTutor;
        const userInfo = this.props.location.state.userInfo;

        return (
            <Router>
                <Route render={({ location, history }) => (
                        <div className="dashboard_wrapper">
                            <SideNav
                                onSelect={(selected) => {
                                    this.setState({ selectedTab: selected });
                                    const to = '/' + selected;
                                    if (location.pathname !== to) {
                                        history.push(to);
                                    }
                                }}
                            >
                                <Link onClick={() => this.props.history.push("/modules")}><img className="mainLogo" src={logo} /></Link>
                                <SideNav.Toggle onClick={() => { this.setState({ isSideBarOpened: !this.state.isSideBarOpened }) }} />
                                <SideNav.Nav defaultSelected="Dashboard">
                                    <NavItem eventKey="Dashboard">
                                        <NavIcon>
                                            <FontAwesomeIcon icon={iconMapping["Modules"]} data-tip data-for='Modules' size="2x">Flashcards</FontAwesomeIcon>
                                            <ReactTooltip id='Modules' type='info' class='mySepecialClass' >
                                                <span>All Modules</span>
                                            </ReactTooltip>

                                        </NavIcon>
                                        <br />
                                        <NavText>
                                            All Modules
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="Files">
                                        <NavIcon>
                                            <FontAwesomeIcon icon={iconMapping["Files"]} data-tip data-for='Files' size="2x" />
                                            <ReactTooltip id='Files' type='info' class='tooltips'>
                                                <span>Files</span>
                                            </ReactTooltip>
                                        </NavIcon>
                                        <NavText>
                                            Files
                                    </NavText>
                                    </NavItem>
                                    <NavItem eventKey="Exams">
                                        <NavIcon>
                                            <FontAwesomeIcon icon={iconMapping["Exams"]} data-tip data-for='Exams' size="2x" />
                                            <ReactTooltip id='Exams' type='info' class='tooltips'>
                                                <span>Exams</span>
                                            </ReactTooltip>
                                        </NavIcon>
                                        <NavText>
                                            Exams
                                    </NavText>
                                    </NavItem>
                                    <NavItem eventKey="Grades">
                                        <NavIcon>
                                            <FontAwesomeIcon icon={iconMapping["Grades"]} data-tip data-for='Grades' size="2x" />
                                            <ReactTooltip id='Grades' type='info' class='tooltips'>
                                                <span>Grades</span>
                                            </ReactTooltip>
                                        </NavIcon>
                                        <NavText>
                                            Grades
                                    </NavText>
                                    </NavItem>
                                    {isTutor? 
                                        <NavItem eventKey="Students">
                                        <NavIcon>
                                            <FontAwesomeIcon icon={iconMapping["Students"]} data-tip data-for='Students' size="2x" />
                                            <ReactTooltip id='Students' type='info' class='tooltips'>
                                                <span>Students</span>
                                            </ReactTooltip>
                                        </NavIcon>
                                        <NavText>
                                            Students
                                    </NavText>
                                    </NavItem> : ''
                                    }
                                    
                                    <NavItem eventKey="Flashcards">
                                        <NavIcon>
                                            <FontAwesomeIcon icon={iconMapping["Flashcards"]} data-tip data-for='Flashcards' size="2x" />
                                            <ReactTooltip id='Flashcards' type='info' class='mySepecialClass'>
                                                <span>Flashcards</span>
                                            </ReactTooltip>
                                        </NavIcon>
                                        <NavText>
                                            Flashcards
                                    </NavText>
                                    </NavItem>
                                    <NavItem eventKey="Discussions">
                                        <NavIcon>
                                            <FontAwesomeIcon icon={iconMapping["Discussions"]} data-tip data-for='Discussions' size="2x" />
                                            <ReactTooltip id='Discussions' type='info' class='tooltips'>
                                                <span>Discussions</span>
                                            </ReactTooltip>
                                        </NavIcon>
                                        <NavText>
                                            Discussions
                                    </NavText>
                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>
                            <main className={this.state.isSideBarOpened ? "dashboard_content_expanded" : "dashboard_content_collapsed"}>
                                <div className="dashboard_header">
                                    {isTutor ?
                                        <h3><FontAwesomeIcon icon={iconMapping[this.state.selectedTab]} size="1x" /> {this.state.selectedTab}</h3> :
                                        <React.Fragment>
                                            <h3 className="cursor_pointer" onClick={() => this.props.history.push("/modules")}>{this.props.location.state.selectedModule} <span classname='breadcrumb'>></span></h3>
                                            <h3>{'\u00A0'}<FontAwesomeIcon icon={iconMapping[this.state.selectedTab]} size="1x" />{'\u00A0'}{this.state.selectedTab}</h3>
                                        </React.Fragment> 
                                    }
                                    <div className="userInfo">
                                        <span >Username: </span><span classname="bold">{userInfo.username}</span> <br />
                                        <span>Last logged In:</span><span classname="bold">{userInfo.last_logged_in}</span> <br />
                                        <Link onClick={() => this.props.history.push("/")}>Sign out</Link>
                                    </div>
                                </div>

                                <hr />
                                <Route path="/discussions" component={props => <Discussions />} />
                                <Route path="/flashcards" component={props => <Flashcards />} />
                                <Route path="/students" component={props => <Students />} />
                                <Route path="/exams" component={props => <Exams {...props}/>} />
                                <Route path="/CreateExam" component={props => <CreateExam {...props}/>} />
                                <Route path="/grades" component={props => <Grades />} />
                                <Route path="/dashboard" component={props => <FlashcardSet {...props}/>} />
                                <Route path="/files" component={props => <Files />} />
                            </main>
                        </div>
                )}
                />
            </Router>)
    }
}
export default Dashboard;