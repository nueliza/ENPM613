import React, { Component, Fragment } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./exams.css";

class CreateExam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Exam: {}
        }
    }

    dropdownChange(e){
        if(e.target.value=="checkbox"){
        }
    }
    render() {
        //<h3>Create {this.props.location.state.selectedSubModule} Exam</h3>
        console.log(`CreateExam Page: ${Object.keys(this.state.Exam).length}`)
        console.log("CreateExam Page:" ,this.props)
        return (
            <Fragment>
                <h3>Algebra</h3>
                <div className="questionWrapper">
                    Question number {Object.keys(this.state.Exam).length + 1}
                    <br />
                    <input type="text" placeholder="Type Question here" />
                    <br />
                    <div className="optionsWrapper">
                        <input type="text" placeholder="Option 1" /> 
                        <input type="text" placeholder="Option 2" />
                        <br/>
                        The correct answer:<br/>
                         <input type="text" placeholder="Type the correct answer here"/>
                    </div>
                </div>
                
                



            </Fragment>)
    }
}
export default CreateExam;