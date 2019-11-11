import { connect } from 'react-redux';
import Login from '../components/login';

import {loginUser} from "../actions/userActions";

const mapDispatchToProps = (dispatch) => {
    return{
        loginUser: (data) => dispatch(loginUser(data))
    }
}
    
export default connect( null,
    mapDispatchToProps
)(Login)