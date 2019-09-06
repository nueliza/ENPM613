import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

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
        console.log(`${this.state.username}-${this.state.password}`);
        //Call API to check whether login is sucessfull and update store.
        this.props.history.push("/homePage");
    }
    render() {
        return (
            <div className="wrapper">
                <div className="formContent">
                    <h3>Login</h3>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <FontAwesomeIcon icon={faUser} size="2x"/>
                            <input type="text"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                            />
                        </div>
                        <div className="form-group">
                        <FontAwesomeIcon icon={faLock} size="2x"/>
                            <input type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                        </div>
                        <input type="submit"
                            className="btn btn-primary"
                            value="Login"
                        />
                    </form>
                    <div className="formFooter">
                        Don't have an account? <a href="#">Sign Up</a> <br />
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;