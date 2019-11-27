import { connect } from 'react-redux';
import Grades from '../components/grades';

import {getGradesList, getExam} from "../actions/examHandler";

const mapDispatchToProps = (dispatch) => {
    return{
        getGradesList: (payload) =>(dispatch(getGradesList(payload))),
        getExam: (payload) =>(dispatch(getExam(payload))),
    }
}

const mapStateToProps = state => ({
    loading: state.loader.loading,
    gradesList: state.exam.gradesList
})

export default connect( mapStateToProps,mapDispatchToProps)(Grades)