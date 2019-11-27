import React from 'react';
import { withRouter } from 'react-router-dom';

const Footer = props => {
    if (props.location.pathname === "/dashboard" || props.location.pathname === "/modules") return null;
    return (
        <React.Fragment>
            <div className="headerWrapper">
            © 2019 Get SAT Pro <span>|</span>
            <span className="links">
                <a href="/"> Terms of use </a> <span>|</span>
                <a href="/"> Privacy Policy</a>
            </span>
            </div>            
        </React.Fragment>
    );
};

export default withRouter(Footer);