import { connect } from 'react-redux';
import Flashcards from '../components/flashcards';

import {setPreference} from "../actions/flashcardsHandler";

const mapDispatchToProps = (dispatch) => {
    return{
        setPreference: (payload) =>{dispatch(setPreference(payload))}
    }
}

const mapStateToProps = state => ({
    flashcard: state.flashcards.flashcard,
    loading: state.loader.loading,
})

export default connect( mapStateToProps,mapDispatchToProps)(Flashcards)