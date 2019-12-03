import { connect } from 'react-redux';
import Flashcards from '../components/flashcards';

import {setPreference, getFlashcard} from "../actions/flashcardsHandler";

/**
 * Functional compoenent for flashcards page
 */

const mapDispatchToProps = (dispatch) => {
    return{
        setPreference: (payload) =>dispatch(setPreference(payload)),
        getFlashcard: (payload)=>dispatch(getFlashcard(payload))
    }
}

const mapStateToProps = state => ({
    flashcard: state.flashcards.flashcard,
    loading: state.loader.loading,
})

export default connect( mapStateToProps,mapDispatchToProps)(Flashcards)