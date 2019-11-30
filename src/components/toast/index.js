import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast, ToastBody } from 'reactstrap';
import { resetToast } from "../../actions";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Representational component for toast messages.
 * These are used thorugh out the system
 */
class ToastContainer extends Component {
    render() {
        setTimeout(function(){ this.props.resetToast();}.bind(this),6000);
        let icon = this.props.toastType === "SUCCESS"? "tick": "cross";
        return (
            this.props.toastMessage !== ""?
            <Toast isOpen={this.props.showToast} className={this.props.toastType === "SUCCESS"? " success " : " failure "}>
                <ToastBody>
                <FontAwesomeIcon color="white" icon={iconMapping[icon]} data-tip data-for='Exams' size="1x" /> &nbsp;
                {this.props.toastMessage}
                </ToastBody>
            </Toast>
            :""
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        resetToast: () => dispatch(resetToast())
    }
}

const mapStateToProps =( state) =>{
    return{
        toastMessage: state.toast.toastMessage,
        toastType: state.toast.toastType
    }
}
    
export default connect( mapStateToProps, mapDispatchToProps)(ToastContainer)