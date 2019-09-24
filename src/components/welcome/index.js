import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


import './welcome.css';
class Welcome extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <Fragment>
                <div>
                    Welcome Page
                    <Link to="/login">Sign In </Link> | <Link to="/registration">Sign up</Link>
                </div>
            </Fragment>)
    }
}
export default Welcome;