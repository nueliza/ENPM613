import React, { Component, Fragment } from 'react';
import Loader from 'react-loader-spinner';

import "./loader.css";

class Loading extends Component {
    render() {
        return (
            <Fragment>
                {this.props.show? 
                <div className="loaderWrapper">
                    <Loader
                        type="ThreeDots"
                        color= "purple"
                        height={100}
                        width={100}
                        visible = {this.props.show}
                    />
                </div> : ""}
                
            </Fragment>)
    }
}
export default Loading;