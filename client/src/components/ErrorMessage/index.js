import React, { Component } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../global.css";

class ErrorMessage extends Component{
    render(){
        let hide = this.props.content === "" ? "hide": "";
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