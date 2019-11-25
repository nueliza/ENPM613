import { connect } from 'react-redux';
import FlashcardSets from '../components/dashboard/flashcardSet';
import { getFlashcardSets } from "../actions/flashcardsHandler";

const mapDispatchToProps = (dispatch) => {
    return{
        getFlashcardSets: (payload) =>(dispatch(getFlashcardSets(payload)))
    }
}

const mapStateToProps = state => ({
    flashcardSets: state.flashcards.flashcardSets
})

export default connect( mapStateToProps,mapDispatchToProps)(FlashcardSets)