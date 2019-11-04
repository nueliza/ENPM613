import React, { Component, Fragment } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../global.css";

class ErrorMessage extends Component{
    render(){
        let hide = this.props.content === "" ? "hide": "";
        return(
            <div className={"errorMessage "+ hide} >
                <FontAwesomeIcon icon={iconMapping["Error"]} size="1x" />&nbsp;{this.props.content}
            </div>
        )
    }
}

export default ErrorMessage;