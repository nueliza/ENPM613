import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Modal from "react-responsive-modal";
import './welcome.css';
import Login from '../login';
import Registration from '../registration';
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
    
    render() {
        return (
            <Fragment>
                <div>
                    Welcome Page
                    <button className="btn btn-link" onClick={()=> this.setState({showLoginModal: true})}>Sign In </button> | 
                    <button className="btn btn-link" onClick={()=> this.setState({showRegistrationModal: true})}>Sign up </button>
                    <Modal open={this.state.showLoginModal} onClose={this.onCloseLoginModal}>

                        <Login />
                    </Modal>
                    <Modal open={this.state.showRegistrationModal} onClose={this.onCloseRegistrationModal}>
                        <Registration />
                    </Modal>
                </div>
            </Fragment>)
    }
}
export default Welcome;