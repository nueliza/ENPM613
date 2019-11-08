import { connect } from 'react-redux';
import Login from '../components/login';
import {setData} from '../actions';

import {loginUser} from "../actions/moduleActions";

const mapDispatchToProps = (dispatch) => {
    return{
        setData: (data) => dispatch(setData(data)),
        loginUser: (data) => dispatch(loginUser(data))
    }
}
    
export default connect( null,
    mapDispatchToProps
)(Login)