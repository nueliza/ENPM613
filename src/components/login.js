import React, { Component, Fragment } from 'react';

import './login.scss';

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
            <div className={loginMainPage}>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter your username"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <input type="submit"
                        className="btn btn-primary"
                        value="Login"
                    />
                </form>
            </div>
        );
    }
}

export default Login;