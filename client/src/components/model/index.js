import React, { Component} from 'react';
import Modal from "react-responsive-modal";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Students extends Component {
    render() {
        return (
            <Modal open={this.props.isVisible} onClose={this.props.onCloseModal}>
                {this.props.modalError? 
                <h2> <FontAwesomeIcon 
                    icon={iconMapping["Exclamation"]}
                    size="1x" 
                    style = {{color: "red"}}
                    /> &nbsp;Error Message 
                </h2>
                : 
                <h2> <FontAwesomeIcon 
                    icon={iconMapping["Exclamation"]}
                    size="1x" 
                    style = {{color: "orange"}}
                    /> &nbsp;Warning
                </h2>
                }
                <hr />
               <p>
               {this.props.modalContent}
                </p> 
            </Modal>)
    }
}
export default Students;