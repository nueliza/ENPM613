import React, { Component, Fragment } from 'react';
import Modal from "react-responsive-modal";
import './registeration.css';

class Registration extends Component {

    render() {
        return (
            <Modal open={this.props.showModal} onClose={this.props.onCloseModal}>
                <div className="RegistrationWrapper">
                    <br />
                    <h3>Sign Up</h3>
                    <hr />

                </div>
            </Modal>)
    }
}
export default Registration;