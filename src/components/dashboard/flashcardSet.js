import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Loading from "../loading";
import NotFound from "../NotFound";
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './dashboard.css';

class FlashcardSet extends Component {
    componentDidMount() {
        this.props.getFlashcardSets({"mod_id": this.props.selectedModuleId})
    }

    handleReset = (set_id) =>{
        this.props.resetProgress({"set_id": set_id})
        .then(()=>{
            this.props.getFlashcardSets({"mod_id": this.props.selectedModuleId})
        })
    }

    render() {
        if (this.props.loading) return <Loading />
        //redirects to Not found page if the getExamsList API fails
        return Object.keys(this.props.flashcardSets).length === 0 ? <NotFound /> :
         (
            <Fragment>
                <div className="modules flashcardSetDashboard">
                    {this.props.flashcardSets.map((set, id)=>{
                        return(
                            <div className="card" key={id} >
                                <div className="card-body">
                                    <h5 className="card-title">{set.set_name}</h5>
                                    <div className="progress" style={{marginBottom: "10px"}}>
                                        <div className="progress-bar" style={{ width: "50%", backgroundColor: 'var(--primary-color)' }}><b>50%</b></div>
                                    </div>
                                       <div>
                                        <button className="btn btn-info getSatProSecondaryButton" onClick={() => {
                                            this.props.getFlashcard({"set_id": set.set_id})
                                            this.props.history.push({
                                                pathname: '/flashcards',
                                            })
                                        }}>
                                            <FontAwesomeIcon icon={iconMapping["play"]} size="1x" /> &nbsp;
                                            Get started
                                        </button>
                                        <button className="btn btn-info getSatProSecondaryButton"
                                        style={{marginLeft: "10px"}}
                                         onClick={() =>{
                                            this.handleReset(set.set_id)
                                        }}>
                                            <FontAwesomeIcon icon={iconMapping["redo"]} size="1x" /> &nbsp;
                                            Reset Progress 
                                        </button>
                                        </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Fragment>)
    }
}
export default withRouter(FlashcardSet);