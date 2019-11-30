import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import "./loader.css";

/**
 * Representational Component for loader.
 * This component is reused through the aplication.
 */
class Loading extends Component {
    render() {
        return (
            <div className="loaderWrapper">
                <Loader
                    type="ThreeDots"
                    color="purple"
                    height={100}
                    width={100}
                    visible={this.props.show}
                />
            </div>
        )
    }
}
export default Loading;