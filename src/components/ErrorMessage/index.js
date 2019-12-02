import React, { Component } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../global.css";
/**
 * A Reusable representational component used through out the application to show error messages to the users
 */
class ErrorMessage extends Component{
    render(){
        let hide = this.props.content === "" || this.props.content === undefined ? "hide": "";
        let messageType = this.props.messageType === "error"? "errorMessage ": "warningMessage ";
        return(
            <div className={messageType + hide} >
                <FontAwesomeIcon icon={iconMapping["Error"]} size="1x" />&nbsp;
                <strong>{this.props.content}</strong>
            </div>
        )
    }
}

export default ErrorMessage;