import { connect } from 'react-redux';
import FlashcardSets from '../components/dashboard/flashcardSet';
import { getFlashcardSets, getFlashcard,resetProgress } from "../actions/flashcardsHandler";
/**
 * Functional compoenent for flashcard set page
 */

const mapDispatchToProps = (dispatch) => {
    return{
        getFlashcardSets: (payload) =>(dispatch(getFlashcardSets(payload))),
        getFlashcard: (payload) =>(dispatch(getFlashcard(payload))),
        resetProgress: (payload) =>dispatch(resetProgress(payload)),
    }
}

const mapStateToProps = state => ({
    flashcardSets: state.flashcards.flashcardSets,
    loading: state.loader.loading,
})

export default connect( mapStateToProps,mapDispatchToProps)(FlashcardSets)