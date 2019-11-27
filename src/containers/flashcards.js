import { connect } from 'react-redux';
import Flashcards from '../components/flashcards';

import {setPreference, resetProgress, getFlashcard} from "../actions/flashcardsHandler";

const mapDispatchToProps = (dispatch) => {
    return{
        setPreference: (payload) =>dispatch(setPreference(payload)),
        resetProgress: (payload) =>dispatch(resetProgress(payload)),
        getFlashcard: (payload)=>dispatch(getFlashcard(payload))
    }
}

const mapStateToProps = state => ({
    flashcard: state.flashcards.flashcard,
    loading: state.loader.loading,
})

export default connect( mapStateToProps,mapDispatchToProps)(Flashcards)