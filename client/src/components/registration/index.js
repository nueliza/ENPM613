import React, { Component, Fragment } from 'react';
import Modal from "react-responsive-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faPhone, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './registeration.css';
import ErrorMessage from "../ErrorMessage";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registrationInfo: { fname: "", lname: "", username: "", password: "", emailId: "", phone: "", role_id: 1 },
            fnameError: "",
            lnameError: "",
            usernameError: "",
            passwordError: "",
            emailIdError: "",
            phoneError: "",
            isFormValid: false,
            isTermsChecked: false,
            termsError: ""
        }
    }

    handleChange = (e) => {
        let registrationInfo = this.state.registrationInfo;
        if (e.target.name !== "terms") {
            registrationInfo[e.target.name] = e.target.value;
            this.setState({ registrationInfo })
        }
        else {
            this.setState({isTermsChecked: e.target.checked})
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.validateField("fname");
        this.validateField("lname");
        this.validateField("password");
        this.validateField("username");
        this.validateField("email");
        this.validateField("phone");
        this.validateField("terms");
    }

    validateField = (field) =>{
        
        let fname = this.state.registrationInfo["fname"];
        let lname = this.state.registrationInfo["lname"];
        let password = this.state.registrationInfo["password"];
        let username = this.state.registrationInfo["username"];
        let email = this.state.registrationInfo["email"];
        let phone = this.state.registrationInfo["phone"];

        console.log("Fname", /^[a-zA-Z]+$/.test(fname));

        //Validate Fname 
        //  this.setState({fnameError: fname === ""? "Please enter your first name": ""})
        //  this.setState({ fnameError: (!/^[a-zA-Z]+$/.test(fname)? "Please enter a valid first name": "")})
        //  this.setState({lnameError: lname === "" ? "Please enter your lastname": ""})

         switch(field){
             case "fname": {
                 if(fname === ""){
                     this.setState({fnameError: "First name is required"});
                 }
                 else {
                     if(!/^[a-zA-Z]+$/.test(fname)){
                     this.setState({fnameError: "Please enter a valid first name"});
                     }
                     else{
                         this.setState({fnameError: ""});
                     }
                 }
             } break;
             case "lname": {
                if(lname === ""){
                    this.setState({lnameError: "Last name is required"});
                }
                else {
                    if(!/^[a-zA-Z]+$/.test(lname)){
                    this.setState({lnameError: "Please enter a valid last name"});
                    }
                    else{
                        this.setState({lnameError: ""});
                    }
                }
             } break;
             case "password": {
                if(password === ""){
                    this.setState({passwordError: "Password is required"});
                }
                else{
                    this.setState({passwordError: ""});
                }
             } break;
             case "username":{
                 if(username === ""){
                     this.setState({usernameError: "Username is required"})
                 }
                 else{
                    this.setState({usernameError: ""});
                 }
             } break;
             case "email":{
                if(email === ""){
                    this.setState({emailIdError: "Email id is required"})
                }
                else {
                    if(!/\S+@\S+\.\S+/.test(email)){
                        this.setState({emailIdError:"Please enter a valid email"})
                    }
                    else{
                        this.setState({emailIdError: ""})
                    }
                }
             } break;
             case "phone":{
                 if(phone === "") {
                     this.setState({phoneError: "Phone number is required"})
                 }
                 else{
                    if(/^[a-zA-Z]+$/.test(phone)){
                        this.setState({phoneError: "Please enter a valid phone number"})
                    }
                    else{
                        this.setState({phoneError: ""});
                    }
                 }
             } break;
             case "terms":{
                 if(this.state.isTermsChecked === false){
                     this.setState({termsError: "Please read the terms and conditions"})
                 }
                 else{
                    this.setState({termsError: ""})
                 }
             }
         }

    }

    render() {
        console.log("Registration", this.state);
        return (
            <Modal open={this.props.showModal} onClose={this.props.onCloseModal}>
                <div className="RegistrationWrapper">
                    <br />
                    <h3>Sign Up</h3>
                    <hr />
                    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <div className="form-group nameField" >
                            <FontAwesomeIcon icon={faUser} size="2x" color="gray" />
                            <input type="text" name="fname"
                                placeholder="Your First name"
                            />
                            <input type="text" name="lname"
                                placeholder="Your last name"
                            />
                            <ErrorMessage content={this.state.fnameError} messageType="error" />
                            <ErrorMessage content={this.state.lnameError} messageType="error" />
                        </div>
                        <div className="form-group">
                            <FontAwesomeIcon icon={faUserCircle} size="2x" color="gray" />
                            <input type="text" name="username"
                                placeholder="Your username"
                            />
                            <ErrorMessage content={this.state.usernameError} messageType="error" />
                        </div>
                        <div className="form-group">
                            <FontAwesomeIcon icon={faLock} size="2x" color="gray" />
                            <input type="password" name="password"
                                id="password"
                                placeholder="Your password"
                            />
                            <ErrorMessage content={this.state.passwordError} messageType="error" />
                        </div>
                        <div className="form-group">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" color="gray" />
                            <input type="text" name="email"
                                placeholder="Your email"
                            />
                            <ErrorMessage content={this.state.emailIdError} messageType="error" />
                        </div>
                        <div className="form-group">
                            <FontAwesomeIcon icon={faPhone} size="2x" color="gray" />
                            <input type="text" name="phone"
                                placeholder="Your phone number"
                            />
                            <ErrorMessage content={this.state.phoneError} messageType="error" />
                        </div>
                        <div className="form-group">
                            <input type="checkbox" name="terms"
                            /> I read and agree to <a href="/">Terms and Conditions</a>
                            <ErrorMessage content={this.state.termsError} messageType="error" />
                        </div>
                        <input type="submit"
                            className="btn btn-primary getSatProSubmitBtn"
                            value="Sign Up"
                        />
                        <div className="formFooter">
                            Already have an account? <a href="#">Sign In</a> <br />
                        </div>
                    </form>
                </div>
            </Modal>)
    }
}
export default Registration;