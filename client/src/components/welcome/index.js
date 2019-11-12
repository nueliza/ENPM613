import React, { Component, Fragment } from 'react';
import './welcome.css';
import Login from '../login';
import Registration from '../registration';
import ToastContainer from "../toast";

class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            showLoginModal : false,
            showRegistrationModal: false
        }
    }

    onCloseLoginModal = () =>{
        this.setState({showLoginModal: false})
    }

    onCloseRegistrationModal = () =>{
        this.setState({showRegistrationModal: false})
    }
    
    openRegistrationModal = () =>{
        this.setState({showLoginModal: false, showRegistrationModal: true})
    }
    
    openLoginModal = () =>{
        this.setState({showLoginModal: true, showRegistrationModal: false})
    }
    render() {
        return (
            <Fragment>
                <ToastContainer />
                <div>
                    Welcome Page
                    <button className="btn btn-link" onClick={()=> this.setState({showLoginModal: true})}>Sign In </button> | 
                    <button className="btn btn-link" onClick={()=> this.setState({showRegistrationModal: true})}>Sign up </button>
                    <Login 
                        showModal= {this.state.showLoginModal}
                        onCloseModal ={this.onCloseLoginModal}
                        loginUser = {this.props.loginUser}
                        openRegistrationModal = {this.openRegistrationModal}
                        loginPending = {this.props.loginPending}
                    />
                    <Registration 
                        showModal={this.state.showRegistrationModal}
                        onCloseModal = {this.onCloseRegistrationModal}
                        openLoginModal = {this.openLoginModal}
                        registerUser = {this.props.registerUser}
                        registrationPending = {this.props.registrationPending}
                    />
                </div>
            </Fragment>)
    }
}
export default Welcome;