import React, { Component, Fragment } from 'react';
import { iconMapping } from "../utils/iconsMapping.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                Question number {Object.keys(this.state.Exam).length + 1}
                <br />
                <input type="text" placeholder="Type Question here" />
                <br />
                <select onChange={(e)=>this.dropdownChange(e)}> 
                    <option value="radio">Radio</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="Long">Long Answer</option>
                </select>



            </Fragment>)
    }
}
export default CreateExam;