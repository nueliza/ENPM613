import React, { Component, Fragment } from 'react';
import CardContainer from './cardConatiner';
import Loading from "../loading";
import NotFound from "../NotFound";

class Flashcards extends Component {
    componentDidMount() {
    }

    render() {
        console.log("this.props", this.props)
        if (this.props.loading) return <Loading />
        //redirects to Not found page if the getExamsList API fails
        return this.props.flashcard === "" ? <NotFound /> :
        (
            <Fragment>
                <button className="btn btn-info">
                    Reset Progress 
                </button>
                <CardContainer flashcard={this.props.flashcard} setPreference={this.props.setPreference} />
            </Fragment>)
    }
}
export default Flashcards;