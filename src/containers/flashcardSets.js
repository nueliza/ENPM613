import { connect } from 'react-redux';
import FlashcardSets from '../components/dashboard/flashcardSet';
import { getFlashcardSets, getFlashcard } from "../actions/flashcardsHandler";

const mapDispatchToProps = (dispatch) => {
    return{
        getFlashcardSets: (payload) =>(dispatch(getFlashcardSets(payload))),
        getFlashcard: (payload) =>(dispatch(getFlashcard(payload)))
    }
}

const mapStateToProps = state => ({
    flashcardSets: state.flashcards.flashcardSets,
    loading: state.loader.loading,
})

export default connect( mapStateToProps,mapDispatchToProps)(FlashcardSets)