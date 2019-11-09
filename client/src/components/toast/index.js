import React, { Component } from 'react';
import { Toast, ToastBody } from 'reactstrap';

class ToastContainer extends Component {
    render() {
        return (
            <Toast isOpen={this.props.showToast}>
                <ToastBody>
                    {this.props.content}
                </ToastBody>
            </Toast>
        )
    }
}

export default ToastContainer;
