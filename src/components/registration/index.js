import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faPhone, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './registeration.css';
import ErrorMessage from "../ErrorMessage";
import { withRouter } from "react-router-dom";
import ToastContainer from "../toast";
import Loading from "../loading";


/**
 * Representational component for student registration
 */
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registrationInfo: { fname: "", lname: "", username: "", password: "", email: "", phone: "", role_id: 1 },
            fnameError: "",
            lnameError: "",
            usernameError: "",
            passwordError: "",
            emailIdError: "",
            phoneError: "",
            errors:{},
            showToast: false
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
        if(this.validateForm()){
            this.props.registerUser(this.state.registrationInfo)
            .then(()=>{
                this.props.onCloseModal();
            })
        }
    }

    validateForm =() =>{
        let formIsValid =true;
        let fname = this.state.registrationInfo["fname"];
        let lname = this.state.registrationInfo["lname"];
        let password = this.state.registrationInfo["password"];
        let username = this.state.registrationInfo["username"];
        let email = this.state.registrationInfo["email"];
        let phone = this.state.registrationInfo["phone"];
        let errors ={};

        if (fname === "" || !/^[a-zA-Z]+$/.test(fname)) {
            formIsValid = false;
            errors["fname"] = "Please enter a valid first name";
        }
        if (lname === "" || !/^[a-zA-Z]+$/.test(lname)) {
            formIsValid = false;
            errors["lname"] = "Please enter a valid last name";
        }
        if (password === "") {
            formIsValid = false;
            errors["password"] = "Password is required";
        }
        if (username === "") {
            formIsValid = false;
            errors["username"] = "Username is required";
        }
        if (email === ""  || !/\S+@\S+\.\S+/.test(email)) {
            formIsValid = false;
            errors["email"] = "Please enter a valid Email id";
        }
        if(phone === ""){
            formIsValid = false;
            errors["phone"] = "Please enter a valid Phone Number";
        }
        else if(phone.match(/\d/g).length !== 11){
            formIsValid = false;
            errors["phone"] = "Please enter a valid Phone Number";
        }

        if(this.state.isTermsChecked === false){
            formIsValid = false;
            errors["terms"] = "Please agree the terms and conditions";
        }

        this.setState({
            errors: errors
          });
        return formIsValid;

    }

    validateField = (field) =>{
        
        let fname = this.state.registrationInfo["fname"];
        let lname = this.state.registrationInfo["lname"];
        let password = this.state.registrationInfo["password"];
        let username = this.state.registrationInfo["username"];
        let email = this.state.registrationInfo["email"];
        let phone = this.state.registrationInfo["phone"];

         switch(field){
             case "fname": 
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
                break;
             case "lname": 
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
                break;
             case "password": 
                if(password === ""){
                    this.setState({passwordError: "Password is required"});
                }
                else{
                    this.setState({passwordError: ""});
                }
                break;
             case "username":
                 if(username === ""){
                     this.setState({usernameError: "Username is required"})
                 }
                 else{
                    this.setState({usernameError: ""});
                 }
                break;
             case "email":
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
                break;
             case "phone":
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
                break;
             default: console.log("Form is valid");
         }

    }

    render() {
        if (this.props.loading) return <Loading show={this.props.loading} />
        return (
            <Modal open={this.props.showModal} onClose={this.props.onCloseModal}>
                {
                    this.props.toastMessage === "" ? "" : <ToastContainer showToast = {this.state.showToast} content={this.props.toastMessage} />
                }
                <div className="RegistrationWrapper">
                    <br />
                    <h3>Sign Up</h3>
                    <span className="terms">It's free and only takes a minute !</span>
                    <hr />
                    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <div className="form-group nameField" >
                            <FontAwesomeIcon icon={faUser} size="2x" color="#601A4A" />&nbsp;
                            <input type="text" name="fname"
                                placeholder="Your First name"
                            />
                            <input type="text" name="lname"
                                placeholder="Your last name"
                            />
                        </div>
                        <ErrorMessage content={this.state.errors["fname"]} messageType="error" />
                        <ErrorMessage content={this.state.errors["lname"]} messageType="error" />
                        <div className="form-group">
                            <FontAwesomeIcon icon={faUserCircle} size="2x" color="#601A4A" />&nbsp;
                            <input type="text" name="username"
                                placeholder="Your username"
                            />
                            <ErrorMessage content={this.state.errors["username"]} messageType="error" />
                        </div>
                        <div className="form-group">
                            <FontAwesomeIcon icon={faLock} size="2x" color="#601A4A" />&nbsp;
                            <input type="password" name="password"
                                id="password"
                                placeholder="Your password"
                            />
                            <ErrorMessage content={this.state.errors["password"]} messageType="error" />
                        </div>
                        <div className="form-group">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#601A4A" />&nbsp;
                            <input type="text" name="email"
                                placeholder="Your email"
                            />
                            <ErrorMessage content={this.state.errors["email"]} messageType="error" />
                        </div>
                        <div className="form-group">
                            <FontAwesomeIcon icon={faPhone} size="2x" color="#601A4A" />&nbsp;
                            <NumberFormat  placeholder="Your phone number" 
                                format="+1 (###) ###-####" mask="_" 
                                name="phone" 
                                onChange={this.handleChange}
                            />
                            <ErrorMessage content={this.state.errors["phone"]} messageType="error" />
                        </div>
                        <div className="form-group terms">
                            By clicking on the Sign Up button, <br />
                            you agree to our <a href="/">Terms and Conditions</a>
                        </div>
                        <input type="submit"
                            className="btn btn-primary getSatProSubmitBtn"
                            value="Sign Up"
                        />
                        <div className="formFooter">
                            Already have an account? <a href="#" onClick={this.props.openLoginModal}>Sign In</a> <br />
                        </div>
                    </form>
                </div>
            </Modal>)
    }
}
export default withRouter(Registration);