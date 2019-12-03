import { connect } from 'react-redux';
import Files from '../components/files';
import {getFilesTutor, uploadFile, getFilesStudent, deleteFile} from "../actions/filesHandler";

/**
 * Functional compoenent for files page
 */

const mapDispatchToProps = (dispatch) => {
    return{
        getFilesTutor: ()=>dispatch(getFilesTutor()),
        uploadFile: (payload) =>dispatch(uploadFile(payload)),
        getFilesStudent: (payload)=>dispatch(getFilesStudent(payload)),
        deleteFile: (payload)=>dispatch(deleteFile(payload))
    }
}

const mapStateToProps = state => ({
    files: state.files.files,
    loading: state.loader.loading
})

export default connect( mapStateToProps,mapDispatchToProps)(Files)