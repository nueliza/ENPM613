import React, { Component } from 'react';
import { getStudentList } from '../../actions/studentHandler';

class ManagePeople extends Component {
    render(){
        //Call API to get list of student.
        //Call API to check whether login is sucessfull and update store.
        //Call API to get list of tutors
        //Add remove student button next to each student
        //Connect API call to delete a student with each remove button
        //Implement secondary login before all of this functionality
        return (
            <div> 
                Manage People
            </div>
        )
    }
}

export default ManagePeople;
