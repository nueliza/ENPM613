import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";

class FlashcardSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Math: ["Algebra", "Calculus", "Something"],
            English: ["Algebra", "Calculus", "Something"]

        };
    }
    render() {
        return (
            <Fragment>
                <div className="modules">
                    {this.state[this.props.selectedModule].map((selectedSubModule, index)=>{
                        return(
                            <div className="card" key={index} onClick={() => {
                                this.props.history.push({
                                    pathname: '/flashcards',
                                    state: { selectedFlashcardSet: selectedSubModule}
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