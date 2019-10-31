import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import {setData} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return{
        setData: (data) => dispatch(setData(data))
    }
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    selectedModule: state.modules.selectedModule
})

export default connect( mapStateToProps,
    mapDispatchToProps
)(Dashboard)