import React, { Component, Fragment } from './node_modules/react';
import Loader from './node_modules/react-loader-spinner';

import "./loader.css";

class Loader extends Component {
    render() {
        return (
            <Fragment>
                {this.props.showLoader? 
                <div className="loaderWrapper">
                    <Loader
                        type="ThreeDots"
                        color= "purple"
                        height={100}
                        width={100}
                        visible = {true}
                    />
                </div> : ""}
                
            </Fragment>)
    }
}
export default Loader;