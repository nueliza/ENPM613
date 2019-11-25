import { connect } from 'react-redux';
import Flashcards from '../components/flashcards';



const mapDispatchToProps = (dispatch) => {
    return{
    }
}

const mapStateToProps = state => ({
    flashcards: state.flashcards.flashcards,
    loading: state.loader.loading,
})

export default connect( mapStateToProps,mapDispatchToProps)(Flashcards)