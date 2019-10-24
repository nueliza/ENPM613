import { connect } from 'react-redux';
import Modules from '../components/modules';


const mapStateToProps = state => ({
    data: state.user.data
  })
    
export default connect( mapStateToProps,
)(Modules)