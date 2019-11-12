import React, { Component, Fragment } from 'react';
import Modal from "react-responsive-modal";
import './registeration.css';

class Registration extends Component {

    render() {
        return (
            <Modal open={this.props.showModal} onClose={this.props.onCloseModal}>
                <div>
                    Registration Page
                </div>
            </Modal>)
    }
}
export default Registration;