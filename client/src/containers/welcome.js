import { connect } from 'react-redux';
import {loginUser, registerUser} from "../actions/userActions";
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
    }
}
    
export default connect( mapStateToProps, mapDispatchToProps)(Welcome)