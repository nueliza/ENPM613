import { connect } from 'react-redux';
import Discussion from '../components/discussions/discussion';


const mapDispatchToProps = (dispatch) => {
    return{
    }
}

const mapStateToProps = state => ({
    selectedDiscussion: state.discussion.selectedDiscussion,
    loading: state.loader.loading,
    userInfo: state.user.userInfo,
})

export default connect( mapStateToProps,mapDispatchToProps)(Discussion)