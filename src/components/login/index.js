import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {loginUser} from "../../actions/userHandler";
import Modal from "react-responsive-modal";
import Loading from "../loading";
import { Redirect } from 'react-router';

import './login.css';
import ErrorMessage from '../ErrorMessage';

/**
 * Representational component for login functionality.
 */
class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            usernamError: "",
            passwordError: ""
        }
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.validateForm()){
            this.setState({
                username: "",
                password: "",
                usernamError:"",
                passwordError:""
            })
            //Call API to check whether login is sucessfull and update store.
            const payload = {
                "username": this.state.username,
                "password": this.state.password
            }
    
            this.props.loginUser(payload);
        }
    }

    validateForm = () =>{
        let username = this.state.username;
        let password = this.state.password;
        let formValid = true;

        if(username === ""){
            formValid = false;
            this.setState({usernamError: "Username is Required"});
        }
            
        if(password === ""){
            formValid = false;
            this.setState({passwordError: "Password is Required"});
        }

        return formValid
    }

    render() {
        if (this.props.loading) return <Loading show={this.props.loading} />
        if (Object.keys(this.props.userInfo).length !== 0) return <Redirect to='/modules' /> 
        return (
                <Modal open={this.props.showModal} onClose={this.props.onCloseModal} >
                    <div className="Loginwrapper">
                        <div className="formContent">
                            <br />
                            <h3>Sign In</h3>
                            <hr />
                            
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faUserCircle} size="2x" color="#601A4A"/>
                                    <input type="text"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                    />
                                </div>
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faLock} size="2x" color="#601A4A"/>
                                    <input type="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                    />
                                </div>
                                <ErrorMessage messageType="error" content={this.state.usernamError}/>
                                <ErrorMessage messageType="error" content={this.state.passwordError}/>
                                <ErrorMessage messageType="error" content={this.props.loginError}/>
                                <input type="submit"
                                    className="btn btn-primary getSatProSubmitBtn"
                                    value="Sign In"
                                />
                            </form>
                            <div className="formFooter">
                                Don't have an account? <a href="#" onClick={this.props.openRegistrationModal}> &nbsp;Sign Up</a> <br />
                            </div>
                        </div>
                    </div>
                </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loginUser: (data) => dispatch(loginUser(data)),
    }
}

const mapStateToProps =( state) =>{
    return{
        loading: state.loader.loading,
        userInfo:  state.user.userInfo
    }
}
    
export default connect( mapStateToProps, mapDispatchToProps)(Login)