import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Loading from "../loading";
import NotFound from "../NotFound";

class FlashcardSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            1: ["Algebra", "Calculus", "Something"],
            2: ["Algebra", "Calculus", "Something"]

        };
    }

    UNSAFE_componentWillMount() {
        this.props.getFlashcardSets({"mod_id": this.props.selectedModuleId})
    }

    render() {

        console.log("This", this.props);
        if (this.props.loading) return <Loading />
        //redirects to Not found page if the getExamsList API fails
        return Object.keys(this.props.flashcardSets).length === 0 ? <NotFound /> :
         (
            <Fragment>
                <div className="modules">
                    {this.state[this.props.selectedModuleId].map((selectedSubModule, index)=>{
                        return(
                            <div className="card" key={index} onClick={() => {
                                this.props.history.push({
                                    pathname: '/flashcards',
                                    state: { selectedFlashcardSet: "Algebra"}
                                })
                            }}>
                                <div className="card-body">
                                    <h5 className="card-title">{selectedSubModule}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Fragment>)
    }
}
export default withRouter(FlashcardSet);