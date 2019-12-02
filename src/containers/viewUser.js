import { connect } from 'react-redux';
import ViewUser from '../components/userDetails/viewUserDetails';


const mapDispatchToProps = (dispatch) => {
    return{
       
    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
})

export default connect( mapStateToProps,mapDispatchToProps)(ViewUser)