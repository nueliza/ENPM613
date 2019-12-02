import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Modal from "react-responsive-modal";
import ErrorMessage from '../ErrorMessage';
class SecondaryPasswordModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            passwordError: "",
            password: ""
        }
    }

    onChangePassword = (e) =>{
        this.setState({password: e.target.value});
    }

    onSubmit = () =>{
        //TODO CALL API TO  VERIFY SECONDARY PASSWORD
        //Confirm sucess and redirect
        this.props.history.push('ViewUser')
    }

    render(){
        return(
            <Modal open={this.props.showModal} onClose={this.props.onCloseModal} >
                <form onSubmit={this.onSubmit}>
                    <input type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                    <ErrorMessage messageType="error" content={this.state.passwordError}/>
                    <input type="submit"
                        className="btn btn-primary getSatProSubmitBtn"
                        value="View Details"
                    />
                </form>
            </Modal>
        )
    }
}

export default withRouter(SecondaryPasswordModal);