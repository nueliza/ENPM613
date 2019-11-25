import React, { Component, Fragment } from 'react';
import CardContainer from './cardConatiner';
import Loading from "../loading";
import NotFound from "../NotFound";

class Flashcards extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
    }

    render() {
        console.log("Flashcards", this.props.flashcards);
        console.log("this.props", this.props)
        if (this.props.loading) return <Loading />
        //redirects to Not found page if the getExamsList API fails
        return Object.keys(this.props.flashcards).length === 0 ? <NotFound /> :
        (
            <Fragment>
                <CardContainer flashcards={this.props.flashcards} />
            </Fragment>)
    }
}
export default Flashcards;