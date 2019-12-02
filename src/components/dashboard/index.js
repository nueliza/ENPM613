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
import Discussion from "../../containers/viewDiscussion";
import CreateDiscussion from '../discussions/createDiscussion';
import Exams from "../../containers/exams";
import CreateExam from "../exams/createExam";
import TakeExam from "../../containers/takeExam";
import Files from "../../containers/files";
import Flashcards from "../../containers/flashcards";
import Grades from "../../containers/grades";
import FlashcardSet from "../../containers/flashcardSets";
import Students from "../../containers/students";
import ToastContainer from "../toast/index";
import ViewExam from "../../containers/viewExam";

/**
 * Representational Component for Student/ Tutor Dashboard. 
 * The dashboard feature change based on the user logged in. i.e. Student or tutor.
 * The features include Flashcards, students, exams, grades, files and discussions
 * Users can navigate to the respective pages using the SideNav.
 * React routes are used to make the navigation between these components seemless.
 * 
 */
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpened: false,
            selectedTab: 'Dashboard',
        }

    }
    logout = (e) =>{
        this.props.logoutUser();
    }

    render() {
        const userInfo = this.props.userInfo;
        const isTutor = userInfo.user_type === "Tutor" ? true : false;
        const selectedModuleId = this.props.selectedModuleId;
        const selectedModuleName = this.props.selectedModuleName;

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
                                                <ReactTooltip id='Students' type='info' className='mySepecialClass' >
                                                    <span>Students</span>
                                                </ReactTooltip> 
                                            </React.Fragment>
                                            )
                                            :  
                                            <React.Fragment>
                                                <FontAwesomeIcon icon={iconMapping["Modules"]} data-tip data-for='Modules' size="2x" />  
                                                <ReactTooltip id='Modules' type='info' className='mySepecialClass' >
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
                                            <ReactTooltip id='Files' type='info' className='mySepecialClass'>
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
                                            <ReactTooltip id='Exams' type='info' className='mySepecialClass'>
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
                                                <ReactTooltip id='Grades' type='info' className='mySepecialClass'>
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
                                            <ReactTooltip id='Discussions' type='info' className='mySepecialClass'>
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
                                            <h3 className="cursor_pointer" onClick={() => this.props.history.push("/modules")}>{selectedModuleName} <span >></span></h3>
                                            <h3>{'\u00A0'}<FontAwesomeIcon icon={iconMapping[this.state.selectedTab]} size="1x" />{'\u00A0'}{this.state.selectedTab}</h3>
                                        </React.Fragment> 
                                    }
                                    <div className="userInfo">
                                        <button className="btn btn-info getSatProSecondaryButton" 
                                        style={{float: "right", lineHeight: "35px"}}
                                        onClick={() => {
                                            this.logout()
                                        }}>
                                            Sign out
                                        </button>
                                        <div style={{float: "right", marginRight: "10px"}}>
                                        <span style={{fontSize: "22px"}}> <b> Hello, {userInfo.fname} {userInfo.lname} !</b></span> <br />
                                            <span>Last logged In: </span><span className="bold">{userInfo.last_logged_in}</span> <br />
                                        </div>
                                        
                                        
                                    </div>
                                </div>

                                <hr />

                                <Route path="/Discussions" component={props => 
                                    <Discussions 
                                        isTutor={isTutor} 
                                        selectedModuleId = {selectedModuleId}
                                    />} 
                                />
                                <Route path="/Discussion" component={props => 
                                    <Discussion />} 
                                /> 
                                <Route path="/CreateDiscussion" component={props => 
                                    <CreateDiscussion 
                                        {...props}
                                        createDiscussion={this.props.createDiscussion}
                                        userInfo = {this.props.userInfo} 
                                        selectedModuleId = {selectedModuleId}
                                    />}
                                />

                                <Route path="/Exams" component={props => 
                                    <Exams 
                                        isTutor={isTutor} 
                                        selectedModuleId = {selectedModuleId}
                                        />} 
                                />
                                <Route path="/CreateExam" component={props => 
                                    <CreateExam 
                                        {...props} 
                                        createExam={this.props.createExam}
                                    />} 
                                />
                                <Route path="/TakeExam" component={props => 
                                    <TakeExam  />} 
                                />

                                <Route path="/Grades" component={props => 
                                    <Grades selectedModuleId = {selectedModuleId} />} 
                                />
                                <Route path="/Files" component={props => 
                                    <Files 
                                        isTutor={isTutor}
                                        selectedModuleId = {selectedModuleId}
                                        />} 
                                />
                                <Route path="/dashboard" component={props => 
                                    isTutor? <Students />:
                                    <FlashcardSet 
                                        selectedModuleId = {selectedModuleId}
                                    />} 
                                    />
                                <Route path="/Flashcards" component={props => <Flashcards />} />
                                <Route path="/Students" component={props => <Students />} />
                                <Route path="/ViewExam" component={props => 
                                    <ViewExam
                                        {...props}
                                        isTutor={isTutor} 
                                    />} 
                                />
                            </main>
                        </div>
                )}
                />
            </Router>)
    }
}
export default withRouter(Dashboard);