import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from "react-responsive-modal";
import { withRouter } from "react-router-dom";

import './login.css';

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
        this.props.history.push("/modules");
    }
    render() {
        return (
            <div className="Mywrapper" >
                <Modal open={this.props.showModal} onClose={this.props.onCloseModal} >
                    <div className="Loginwrapper">
                        <div className="formContent">
                            <br />
                            <h3>Sign In</h3>
                            <hr />
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

export default withRouter(Login);