import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import {logoutUser} from "../actions/userHandler";
import {createDiscussion} from "../actions/discussionHandler";
import { getFlashcardSets } from "../actions/flashcardsHandler";

const mapDispatchToProps = (dispatch) => {
    return{
        logoutUser: ()=>dispatch(logoutUser()),
        createDiscussion: (payload) =>(dispatch(createDiscussion(payload))),
        getFlashcardSets: (payload) =>(dispatch(getFlashcardSets(payload)))
    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    selectedModuleId: state.user.selectedModuleId,
    selectedModuleName: state.user.selectedModuleName,
    flashcardSets: state.flashcards.flashcardSets
})

export default connect( mapStateToProps,mapDispatchToProps)(Dashboard)