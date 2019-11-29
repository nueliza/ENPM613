import React, { Component, Fragment } from 'react';
import CardContainer from './cardConatiner';
import Loading from "../loading";
import { Redirect } from 'react-router';
import { withRouter } from "react-router-dom";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Flashcards extends Component {
    

    render() {
        if (this.props.loading) return <Loading />
        //redirects to Not found page if the getExamsList API fails
        return this.props.flashcard === "" ? <Redirect to="/dashboard" />:
        (
            <Fragment>
                <button
                    type="button"
                    className="btn btn-info getSatProSecondaryButton"
                    style={{marginRight: "10px"}}
                    onClick={() => {
                        this.props.history.push({
                            pathname: '/dashboard',
                        })
                    }}>
                    <FontAwesomeIcon icon={iconMapping["back"]} size="1x" />
                    &nbsp;<span>Back to Flashcard Sets</span>
                </button>
                <CardContainer flashcard={this.props.flashcard} setPreference={this.props.setPreference} />
            </Fragment>)
    }
}
export default withRouter(Flashcards);