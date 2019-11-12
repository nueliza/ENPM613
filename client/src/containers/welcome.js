import { connect } from 'react-redux';
import {loginUser} from "../actions/userActions";
import Welcome from '../components/welcome';

const mapDispatchToProps = (dispatch) => {
    return{
        loginUser: (data) => dispatch(loginUser(data))
    }
}

const mapStateToProps =( state) =>{
    return{
        loginPending: state.user.loginPending,
    }
}
    
export default connect( mapStateToProps, mapDispatchToProps)(Welcome)