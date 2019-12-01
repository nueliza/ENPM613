import { connect } from 'react-redux';
import Files from '../components/files';
import {getFilesTutor, uploadFile} from "../actions/filesHandler";

const mapDispatchToProps = (dispatch) => {
    return{
        getFilesTutor: ()=>dispatch(getFilesTutor()),
        uploadFile: (payload) =>dispatch(uploadFile(payload))
    }
}

const mapStateToProps = state => ({
    files: state.files.files,
    loading: state.loader.loading
})

export default connect( mapStateToProps,mapDispatchToProps)(Files)