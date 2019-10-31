export function getExam(payload) {
    //TODO: service call to get an exam
    return{
        type: 'GET_EXAM',
        data: payload //will change to response
    }
}

export function submitExam(payload) {
    //TODO: service call to submit an exam
    return{
        type: 'SUBMIT_EXAM',
        data: payload //will change to response
    }
}

export function deleteExam(payload){
    //TODO: service call to delete an exam
    return{
        type: 'DELETE_EXAM',
        data: payload //will change to response
    }
}

export function createExam(payload) {
    //TODO: service call to create an Exam
    return{
        type: 'CREATE_EXAM',
        data: payload //will change to response
    }
}