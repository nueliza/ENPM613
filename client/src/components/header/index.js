import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = props => {
    if (props.location.pathname == "/dashboard" || props.location.pathname == "/modules") return null;
    return (
        <React.Fragment>
            HEADER
        </React.Fragment>
    );
};

export default withRouter(Header);