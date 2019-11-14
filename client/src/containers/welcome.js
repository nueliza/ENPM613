import { connect } from 'react-redux';
import {loginUser, registerUser} from "../actions/userHandler";
import Welcome from '../components/welcome';

const mapDispatchToProps = (dispatch) => {
    return{
        loginUser: (data) => dispatch(loginUser(data)),
        registerUser: (data) => dispatch(registerUser(data)),
    }
}

const mapStateToProps =( state) =>{
    return{
        registrationPending:  state.user.registrationPending,
        loginPending: state.user.loginPending,
        loginError:  state.user.loginError,
        userInfo:  state.user.userInfo
    }
}
    
export default connect( mapStateToProps, mapDispatchToProps)(Welcome)