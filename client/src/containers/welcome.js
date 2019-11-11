import { connect } from 'react-redux';
import {loginUser} from "../actions/userActions";
import Welcome from '../components/welcome';

const mapDispatchToProps = (dispatch) => {
    return{
        loginUser: (data) => dispatch(loginUser(data))
    }
}
    
export default connect( null,
    mapDispatchToProps
)(Welcome)