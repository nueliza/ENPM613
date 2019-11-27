import React, { Component, Fragment } from 'react';
import CardContainer from './cardConatiner';
import Loading from "../loading";
import NotFound from "../NotFound";

class Flashcards extends Component {
    handleReset = () =>{
        //TODO
        // let payload = {
        //     "set_id": this.props.flashcard.set_id
        // }
        // this.props.resetProgress(payload)
        // .then(()=>{
        //     this.props.getFlashcard({"set_id": this.props.flashcard.set_id})
        // })
    }

    render() {
        console.log("this.props", this.props)
        if (this.props.loading) return <Loading />
        //redirects to Not found page if the getExamsList API fails
        return this.props.flashcard === "" ? <NotFound /> :
        (
            <Fragment>
                <button className="btn btn-info getSatProSecondaryButton" onClick={() =>{
                    this.handleReset()
                }}>
                    Reset Progress 
                </button>
                <CardContainer flashcard={this.props.flashcard} setPreference={this.props.setPreference} />
            </Fragment>)
    }
}
export default Flashcards;