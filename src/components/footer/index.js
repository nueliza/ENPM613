import React from 'react';
import { withRouter } from 'react-router-dom';

const Footer = props => {
    if (props.location.pathname == "/dashboard" || props.location.pathname == "/modules") return null;
    return (
        <React.Fragment>
            Footer
        </React.Fragment>
    );
};

export default withRouter(Footer);