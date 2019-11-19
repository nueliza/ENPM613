import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast, ToastBody } from 'reactstrap';
import { resetToast } from "../../actions";

class ToastContainer extends Component {
    render() {
        setTimeout(function(){ this.props.resetToast();}.bind(this),60000);
        return (
            this.props.toastMessage !== ""?
            <Toast isOpen={this.props.showToast} className={this.props.toastType === "SUCCESS"? " success " : " failure "}>
                <ToastBody>
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