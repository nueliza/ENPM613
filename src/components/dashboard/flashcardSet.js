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

    componentDidMount() {
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
                    {this.props.flashcardSets.map((set, id)=>{
                        return(
                            <div className="card" key={id} onClick={() => {
                                this.props.history.push({
                                    pathname: '/flashcards',
                                    state: { setId: set.set_id}
                                })
                            }}>
                                <div className="card-body">
                                    <h5 className="card-title">{set.set_name}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Fragment>)
    }
}
export default withRouter(FlashcardSet);