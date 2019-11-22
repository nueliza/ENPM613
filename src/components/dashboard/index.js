import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { withRouter } from "react-router-dom";

import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './dashboard.css';
import logo from "./images/Logo.png";

import Discussions from "../../containers/discussions";
import Discussion from "../discussions/discussion";
import CreateDiscussion from '../discussions/createDiscussion';
import Exams from "../../containers/exams";
import CreateExam from "../exams/createExam";
import TakeExam from "../exams/takeExam";
import Files from "../../containers/files";
import Flashcards from "../../containers/flashcards";
import Grades from "../../containers/grades";
import FlashcardSet from "./flashcardSet";
import Students from "../../containers/students";
import ToastContainer from "../toast/index";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpened: false,
            selectedTab: 'Dashboard',
        }

    }
    logout = (e) =>{
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const userInfo = this.props.userInfo;
        const isTutor = userInfo.user_type === "Tutor" ? true : false;
        const selectedModuleId = this.props.selectedModuleId;
        const selectedModuleName = this.props.selectedModuleName;
        console.log("SelectedModule", selectedModuleId, selectedModuleName);

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
                                <Link onClick={() => this.props.history.push("/modules")}><img className="mainLogo" alt="Logo" src={logo} /></Link>
                                <br />
                                <span className="avatar dashboardAvatar">
                                    {userInfo.fname.charAt(0)}{userInfo.lname.charAt(0)}
                                </span>
                                <br/>
                                <SideNav.Toggle onClick={() => { this.setState({ isSideBarOpened: !this.state.isSideBarOpened }) }} />
                                <SideNav.Nav defaultSelected="Dashboard">
                                    <NavItem eventKey="Dashboard">
                                        <NavIcon>
                                            {isTutor? (
                                            <React.Fragment>
                                                <FontAwesomeIcon icon={iconMapping["Students"]} data-tip data-for='Students' size="2x" />
                                                <ReactTooltip id='Modules' type='info' class='mySepecialClass' >
                                                    <span>Students</span>
                                                </ReactTooltip> 
                                            </React.Fragment>
                                            )
                                            :  
                                            <React.Fragment>
                                                <FontAwesomeIcon icon={iconMapping["Modules"]} data-tip data-for='Modules' size="2x" />  
                                                <ReactTooltip id='Modules' type='info' class='mySepecialClass' >
                                                    <span>All Modules</span>
                                                </ReactTooltip>    
                                            </React.Fragment>
                                            }
                                        </NavIcon>
                                        <br />
                                        <NavText>
                                            {isTutor? "Students":"All Modules"}
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
                                    {
                                        isTutor? '':
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
                                    }
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
                                <ToastContainer />
                                <div className="dashboard_header">
                                    {isTutor ?
                                        <h3><FontAwesomeIcon icon={iconMapping[this.state.selectedTab]} size="1x" /> {this.state.selectedTab}</h3> :
                                        <React.Fragment>
                                            <h3 className="cursor_pointer" onClick={() => this.props.history.push("/modules")}>{selectedModuleName} <span classname='breadcrumb'>></span></h3>
                                            <h3>{'\u00A0'}<FontAwesomeIcon icon={iconMapping[this.state.selectedTab]} size="1x" />{'\u00A0'}{this.state.selectedTab}</h3>
                                        </React.Fragment> 
                                    }
                                    <div className="userInfo">
                                        <span className="bold">Hello, {this.props.userInfo.fname} {this.props.userInfo.lname} !</span> <br />
                                        <span>Last logged In:</span><span className="bold">{userInfo.last_logged_in}</span> <br />
                                        <a href="/" onClick={this.logout}>Sign out</a>
                                    </div>
                                </div>

                                <hr />

                                <Route path="/discussions" component={props => 
                                    <Discussions 
                                        isTutor={isTutor} 
                                        deleteDiscussion={this.props.deleteDiscussion}
                                        selectedModuleId = {selectedModuleId}
                                    />} 
                                />
                                <Route path="/discussion" component={props => 
                                    <Discussion 
                                        {...props} 
                                        userInfo={userInfo}
                                        selectedDiscussion={this.props.selectedDiscussion}
                                        replyToDiscussion={this.props.replyToDiscussion}
                                    />} 
                                /> 
                                <Route path="/CreateDiscussion" component={props => 
                                    <CreateDiscussion 
                                        {...props}
                                        createDiscussion={this.props.createDiscussion}
                                        userInfo = {this.props.userInfo} 
                                        selectedModuleId = {selectedModuleId}
                                    />}
                                />

                                <Route path="/exams" component={props => 
                                    <Exams 
                                        isTutor={isTutor} 
                                        selectedModuleId = {selectedModuleId}
                                        deleteExam={this.props.deleteExam}
                                        />} 
                                />
                                <Route path="/CreateExam" component={props => 
                                    <CreateExam 
                                        {...props} 
                                        createExam={this.props.createExam}
                                    />} 
                                />
                                <Route path="/takeExam" component={props => 
                                    <TakeExam  
                                        {...props}
                                        submitExam={this.props.submitExam}
                                        getExam={this.props.getExam}
                                    />} 
                                />

                                <Route path="/grades" component={props => <Grades />} />
                                <Route path="/files" component={props => <Files isTutor={isTutor}/>} />
                                <Route path="/dashboard" component={props => 
                                    isTutor? <Students />:<FlashcardSet selectedModuleId = {selectedModuleId}/>} />
                                <Route path="/flashcards" component={props => <Flashcards />} />
                                <Route path="/students" component={props => <Students />} />
                            </main>
                        </div>
                )}
                />
            </Router>)
    }
}
export default withRouter(Dashboard);