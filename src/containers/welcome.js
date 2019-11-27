import { connect } from 'react-redux';
import {loginUser, registerUser, logoutUser} from "../actions/userHandler";
import Welcome from '../components/welcome';

const mapDispatchToProps = (dispatch) => {
    return{
        loginUser: (data) => dispatch(loginUser(data)),
        registerUser: (data) => dispatch(registerUser(data)),
        logoutUser: ()=>dispatch(logoutUser())
    }
}

const mapStateToProps =( state) =>{
    return{
        registrationPending:  state.user.registrationError,
        loginPending: state.user.loginPending,
        loginError:  state.user.loginError,
        userInfo:  state.user.userInfo, 
        loading: state.loader.loading
    }
}
    
export default connect( mapStateToProps, mapDispatchToProps)(Welcome)