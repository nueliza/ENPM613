import React, { Component, Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconMapping } from "../utils/iconsMapping.js";
import { withRouter } from "react-router-dom";
import "./grades.css";
import Loading from "../loading";

class Grades extends Component {
    UNSAFE_componentWillMount() {
        this.props.getGradesList({"mod_id": this.props.selectedModuleId})
    }

    render() {

        if (this.props.loading) return <Loading />
        //redirects to Not found page if the getExamsList API fails
        return  (
            <div className="dashboard_body grades_body">
                <div className="dashboard_subSection">
                    <div className="quoteWrapper">
                        <FontAwesomeIcon icon={iconMapping["QuoteLeft"]} size="2x" style={{color: "gray"}} />&nbsp;
                        <span className="quoteContent">Perpetual optimism is a force multiplier </span>
                        <span className="author">- Unknown</span>
                    </div>
                    <br />
                    { Object.keys(this.props.gradesList).length === 0 ? 
                    <Fragment>
                        <FontAwesomeIcon icon={iconMapping["glass"]} color="gray" size="7x" /> <br /><br />
                        Hallelujah! No grades yet! <br /><br />
                    </Fragment>
                    :
                    <ul className="list-group">
                        {this.props.gradesList.map((grade, id)=>{
                            return(
                                <li className="list-group-item">{grade.exam_name} 
                                    <span className="Score"> Score:  {grade.grade}</span>
                                    <button type="button" 
                                        className="btn btn-info"
                                        onClick={() => {
                                            this.props.getExam({ "exam_id": grade.exam_id});
                                            this.props.history.push({
                                                pathname: '/viewExam',
                                            })
                                        }}
                                    >
                                        
                                        View Answers</button>
                                </li>
                            )
                        })}
                    </ul> }
                </div>
            </div>
        )
    }
}
export default withRouter(Grades);