import { connect } from 'react-redux';
import Login from '../components/login';
import {setData} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return{
        setData: (data) => dispatch(setData(data))
    }
}
    
export default connect( null,
    mapDispatchToProps
)(Login)