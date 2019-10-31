import { connect } from 'react-redux';
import Exams from '../components/exams';

const mapStateToProps = state => ({
    userInfo: state.user.userInfo
  })
    
export default connect( mapStateToProps
)(Exams)