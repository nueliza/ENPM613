import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {loginUser, registerUser} from "../../actions/userActions";
import Modal from "react-responsive-modal";
import Loading from "../loading";
import { Redirect } from 'react-router';

import './login.css';
import ErrorMessage from '../ErrorMessage';

class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
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

        this.setState({
            username: "",
            password: "",
        })
        //Call API to check whether login is sucessfull and update store.
        const payload = {
            "username": this.state.username,
            "password": this.state.password
        }

        this.props.loginUser(payload);
    }
    render() {
        if (this.props.loginPending) return <Loading show={this.props.loginPending} />
        if (Object.keys(this.props.userInfo).length > 0) return <Redirect to='/modules' /> 
        return (
            <div className="Mywrapper" >
                <Modal open={this.props.showModal} onClose={this.props.onCloseModal} >
                    <div className="Loginwrapper">
                        <div className="formContent">
                            <br />
                            <h3>Sign In</h3>
                            <hr />
                            <ErrorMessage messageType="error" content={this.props.loginError}/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faUserCircle} size="2x" color="gray"/>
                                    <input type="text"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                    />
                                </div>
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faLock} size="2x" color="gray"/>
                                    <input type="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                    />
                                </div>
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
            </div>
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
        loginPending: state.user.loginPending,
        loginError:  state.user.loginError,
        userInfo:  state.user.userInfo
    }
}
    
export default connect( mapStateToProps, mapDispatchToProps)(Login)