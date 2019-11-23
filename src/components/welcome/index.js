import React, { Component, Fragment } from 'react';
import './welcome.css';
import Login from '../login';
import Registration from '../registration';
import ToastContainer from "../toast";
import logo from "../dashboard/images/Logo.png";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WelcomeCarousel from "../carousel";
import success1 from "../successStories/images/success1.jpg";
import success2 from "../successStories/images/success2.jpg";
import success3 from "../successStories/images/success3.jpg";
import autoGrading from "../serviceHighlights/images/autoGrading.png";
import discussion from "../serviceHighlights/images/discussion.jpg";
import flashCard from "../serviceHighlights/images/flashCard.png";

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
                        <div className="serviceImage"> <img alt='autograde' src={autoGrading} className="myimg" /> </div>
                        <div className="serviceText"> <b>Autograding</b> <p className="smallItalics">Save time marking up assignments and ensure grading consistency. Instant feedback promotes instant clarification.</p> </div>
                    </div>

                    <div className="subItem">
                        <div className="serviceImage"> <img alt='flsh' src={flashCard} className="myimg" /> </div>
                        <div className="serviceText"> <b>Flashcards</b> <p className="smallItalics">When it comes to studying or reviewing concepts in the most effective way possible, nothing comes close to flashcards.</p> </div>
                    </div>

                    <div className="subItem">
                        <div className="serviceImage"> <img alt='discuss' src={discussion} className="myimg" /> </div>
                        <div className="serviceText"> <b>Discussions</b> <p className="smallItalics">Discussions not only help students learn from one another but also help students understand and retain the lecture better.</p> </div>
                    </div>

                </div>

                <div className="successStoryHeader">Our Success Stories ...</div>

                <div className="successStories">
                    <div className="subItem">
                        <div className="successImage">
                            <img alt='story1' src={success1} className="myimg" /> <div className="successImage"><b>Jessica Jones</b> <br /> <p className="smallItalics">SAT Score: 1530 </p></div>
                        </div>
                        <div className="successImage">
                            <p>Jessica from Chicago scored a perfect 800 on SAT Math and came close with her Reading/Writing at 730. Unlike a lot of students, Jessica got this amazing score on her first try!.She found Get SAT Pro's free SAT prep helpful, spending about 60 hours in the six weeks before her test working with it.</p>
                        </div>
                    </div>
                    <div className="subItem">
                        <div className="successImage">
                            <img alt='story1' src={success2} className="myimg" /> <div className="successImage"><b>Karen Jacob</b> <br /> <p className="smallItalics">SAT Score: 1480</p></div>
                        </div>
                        <div className="successImage">
                            <p> Karen from Puerto Rico is another test-taker with an astounding 800 on SAT Math, 680 Reading/Writing. She took the exam three times and, as is true for many students, saw her scores climb steadily each time!She took her final SAT after prepping with Get SAT Pro and saw her score go up by 100 points.</p>
                        </div>
                    </div>
                    <div className="subItem">
                        <div className="successImage">
                            <img alt='story1' src={success3} className="myimg" /> <div className="successImage"><b>Andrew Anderson</b> <br /> <p className="smallItalics">SAT Score: 1600</p></div>
                        </div>
                        <div className="successImage">
                            <p>Andrew from Washington scored a perfect 1600 as well. After a 1550 the previous year, Andrew decided to go back and try to score even higher. He took help of the Get SAT Pro online classes. He utilized the feature of discussion to connect with many other aspiring students and made his way to a perfect score.</p>
                        </div>
                    </div>

                </div>
                <Login
                    showModal={this.state.showLoginModal}
                    onCloseModal={this.onCloseLoginModal}
                    openRegistrationModal={this.openRegistrationModal}
                />
                <Registration
                    showModal={this.state.showRegistrationModal}
                    onCloseModal={this.onCloseRegistrationModal}
                    openLoginModal={this.openLoginModal}
                    registerUser={this.props.registerUser}
                    registrationPending={this.props.registrationPending}
                />
            </Fragment>)
    }
}
export default Welcome;