import React, { Component, Fragment } from 'react';
import './welcome.css';
import Login from '../login';
import Registration from '../registration';
import ToastContainer from "../toast";
import logo from "../dashboard/images/Logo.png";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WelcomeCarousel from "../carousel";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginModal: false,
            showRegistrationModal: false
        }
    }

    onCloseLoginModal = () => {
        this.setState({ showLoginModal: false })
    }

    onCloseRegistrationModal = () => {
        this.setState({ showRegistrationModal: false })
    }

    openRegistrationModal = () => {
        this.setState({ showLoginModal: false, showRegistrationModal: true })
    }

    openLoginModal = () => {
        this.setState({ showLoginModal: true, showRegistrationModal: false })
    }
    render() {
        return (
            <Fragment>
                <ToastContainer />
                <div className="information">
                    <div className="welcomeLogo">
                        <img alt="Logo" src={logo} /> <span>Get SAT Pro</span>
                    </div>
                    <div className="rightWrapper">
                        <span className="info">
                            <FontAwesomeIcon color="#601A4A" icon={iconMapping["map"]} data-tip data-for='Exams' size="2x" />
                            &nbsp;College Park, MD 20742
                        </span>
                        <span className="info">
                            <FontAwesomeIcon color="#601A4A" icon={iconMapping["mail"]} data-tip data-for='Exams' size="2x" />
                            &nbsp;helpdesk@getSatPro.com
                        </span>
                        <div className="getIntoTheSystem">
                            <button className="btn btn-link" onClick={() => this.setState({ showLoginModal: true })}>Sign In </button>
                            <button className="btn btn-info" onClick={() => this.setState({ showRegistrationModal: true })}>Sign up </button>
                            &nbsp;
                            <button className="btn btn-info" onClick={() => this.props.logoutUser()}> Sign out</button> 
                        </div>
                    </div>
                </div>
                <WelcomeCarousel />
                <div className="services">
                    <div className="subItem"> 
                        Autograding
                    </div>
                    <div className="subItem">
                        Flashcards
                    </div>
                    <div className="subItem">
                        Discussions
                    </div>

                </div>
                <Login
                    showModal={this.state.showLoginModal}
                    onCloseModal={this.onCloseLoginModal}
                    openRegistrationModal={this.openRegistrationModal}
                    loading = {this.props.loading}
                    userInfo = {this.props.userInfo} //For redirecting to modules when response is received.
                />
                <Registration
                    showModal={this.state.showRegistrationModal}
                    onCloseModal={this.onCloseRegistrationModal}
                    openLoginModal={this.openLoginModal}
                    registerUser={this.props.registerUser}
                    registrationError={this.props.registrationError}
                />
            </Fragment>)
    }
}
export default Welcome;