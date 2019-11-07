import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Particles from 'react-particles-js';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: ""
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

        this.props.setData("Tutor");
        this.props.history.push("/modules");
    }
    render() {
        return (
            <div className="wrapper">
                 <Particles className="wrapper"
                params={{
                    "particles": {
                        "line_linked": {
                                    "color":"#FFFFFF"
                                    },
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        },
                        "opacity":{
                            "value": 3
                        },
                        "shape":{
                            "type":"circle"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": ["grab", "bubble"]
                            }
                        }
                    }
                }}
                style={{
                        width: '100%',
                        background: "var(--primary-color)",
                        height: "100%",
                        opacity: "0.5"
                 }}
                />
                <div className="formContent">
                    <h3>Login</h3>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <FontAwesomeIcon icon={faUser} size="2x" />
                            <input type="text"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                            />
                        </div>
                        <div className="form-group">
                            <FontAwesomeIcon icon={faLock} size="2x" />
                            <input type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                        </div>
                        <input type="submit"
                            className="btn btn-primary getSatProSubmitBtn"
                            value="Login"
                        />
                    </form>
                    <div className="formFooter">
                        Don't have an account? <a href="#">Sign Up</a> <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;