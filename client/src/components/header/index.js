import React from 'react';
import { withRouter } from 'react-router-dom';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./header.css";

const Header = props => {
    if (props.location.pathname === "/dashboard" || props.location.pathname === "/modules") return null;
    return (
        <div className="headerWrapper">
            <span className="links">
                <a href="/">About</a> <span>|</span>
                <a href="/"> Services</a> 
            </span>
            <span className="right">
                <span className="social">
                    Follow us: &nbsp;
                    <FontAwesomeIcon color="white" icon={iconMapping["facebook"]} size="1x" /> &nbsp;
                    <FontAwesomeIcon color="white" icon={iconMapping["twitter"]} size="1x" /> &nbsp;
                    <FontAwesomeIcon color="white" icon={iconMapping["instagram"]} size="1x" /> &nbsp;
                </span>
                &nbsp;| &nbsp;
                <span className="contactUs">
                    Call now +1 (800)-789-9089
                </span>
            </span>
        </div>
    );
};

export default withRouter(Header);