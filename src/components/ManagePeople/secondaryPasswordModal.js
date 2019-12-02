import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Modal from "react-responsive-modal";
import ErrorMessage from '../ErrorMessage';
import { validate } from '@babel/types';
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

    onSubmit = (e) =>{
        //TODO CALL API TO  VERIFY SECONDARY PASSWORD
        //Confirm sucess and redirect
        e.preventDefault();
        if(this.validateForm()){
            this.setState({passwordError: "", password: ""})
            this.props.getUserDetails()
            .then(()=>{
                this.props.history.push('ViewUser')
            })
           
        }
        
    }

    validateForm = () =>{
        let password  = this.state.password;
        let formValid = true;
        if(password === ""){
            formValid = false;
            this.setState({passwordError: "Password is Required"});
        }
        return formValid
    }

    render(){
        return(
            <Modal open={this.props.showModal} onClose={this.props.onCloseModal} >
                Please enter your verification password:
                <hr />
                <ErrorMessage messageType="error" content={this.state.passwordError}/>
                <form onSubmit={this.onSubmit}>
                    <input type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                    <br /> <br/>
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