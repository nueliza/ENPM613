import { connect } from 'react-redux';
import Exams from '../components/exams';

const mapStateToProps = state => ({
    userInfo: state.user.userInfo
  })

const mapDispatchToProps = (dispatch) => {
  return{
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(Exams)